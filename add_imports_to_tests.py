#!/usr/bin/env python
# -*- coding: utf-8 -*-
# -*- mode: python -*-
import logging
import os
import re

logger = logging.getLogger("dbc." + __name__)


class TestError(Exception):
    pass


def find_function_definitions_in_file(path):
    """ Find function definitions in javascript file """
    functions = set()
    with open(path) as fh:
        for line in fh:
            m = re.match('^(function|export function|export default function) (.+) *\(', line)
            if m:
                functions.add(tuple(list(m.groups()) + [path]))
    return functions


def find_function_definitions(path):
    """
    find all function definitions recursively under path.
    The function only examines javascript files not located in test dirs.
    """
    functions = set()
    for root, dirs, files in os.walk(path, topdown=True):
        dirs[:] = [d for d in dirs if d != '__tests__']
        for f in [os.path.abspath(os.path.join(root, f)) for f in files if f.endswith('.js')]:
            functions.update(find_function_definitions_in_file(f))
    return functions


def find_missing_imports(path):
    """ Find missing imports in autogenerated javascript testfiles """
    with open(path) as fh:
        functions = set()

        content = fh.read()
        m = re.search('(.*)(// PLEASE.*?\n\n)(.*)', content, re.DOTALL)
        if m:

            lines = m.group(2).split('\n')
            for i, line in enumerate(lines[1:]):
                if line.startswith('//'):
                    functions.add(line[2:].strip())
            return m.group(1), m.group(3), functions
    raise TestError('No missing import found in file %s' % path)


def find_modules(functions, definitions):
    """
    Find all the apropriate modules for the given functions.
    Raises error if name clash is detected.
    """
    modules = {}
    candidates = [d for d in definitions if d[1] in functions]
    for function in functions:
        candidates = [d for d in definitions if d[1] == function]
        exported_candidates = [c for c in candidates if c[0] in ['export function', 'export default function']]
        if len(exported_candidates) > 1:
            raise TestError("Multiple candidates found for function '%s'. Found in the following modules: [%s]" % (function, " | ".join([m[2] for m in exported_candidates])))

        if len(exported_candidates) == 0 and len(candidates) > 0:
            raise TestError("found function '%s' in modules [%s], but it is not exported" % (function, " | ".join([m[2] for m in candidates])))

        modules[function] = exported_candidates[0]
    return modules


def add_imports_to_file(test_file, definitions):
    """ Add imports to autogenerated testfile """
    try:
        pre, post, functions = find_missing_imports(test_file)
        modules = find_modules(functions, definitions)
        imports = "\n".join(["import {%s} from '%s';" % (k, os.path.relpath(v[2], os.path.dirname(os.path.abspath(test_file)))) for k, v in modules.iteritems()])
        with open(test_file, 'w') as fh:
            logger.debug("Adding imports to file %s", test_file)
            fh.write(''.join([pre, "// Imports added by '%s'\n" % __file__, imports, '\n\n', post]))
    except TestError, e:
        logger.debug(e)


def add_imports(path, definitions):
    """ Add imports to autogenerated testfiles """
    for root, dirs, files in os.walk(path, topdown=True):
        for f in [os.path.abspath(os.path.join(root, f)) for f in files if f.endswith('.js')]:
            add_imports_to_file(f, definitions)


def cli():
    """ Commandline interface """
    from optparse import OptionParser

    usage = """add import statements to autogenerated service-provider tests"""
    src_dir = 'src'

    parser = OptionParser(usage="%prog [options] test-dir" + usage)

    parser.add_option("-s", "--src-dir", type="string", action="store", dest="src_dir",
                      help="sourcecode folder. Default is %s" % src_dir, default=src_dir)

    parser.add_option("-v", "--verbose", action="store_true", dest="verbose",
                      help="verbose output.", default=False)

    (options, args) = parser.parse_args()

    level = logging.INFO
    if options.verbose:
        level = logging.DEBUG

    logging.basicConfig(format='%(message)s', level=level)

    logger.info("Examining source files in dir %s", src_dir)
    definitions = find_function_definitions(options.src_dir)

    if len(args) < 1:
        parser.error('need testdir')

    logger.info("Adding import to testfiles found in dir %s", args[0])
    add_imports(args[0], definitions)


if __name__ == '__main__':
    cli()
