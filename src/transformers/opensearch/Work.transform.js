'use strict';
/**
 * @file
 * Transformation of request to and response from the Opensearch webservice,
 * for presentation of work data.
 */

import * as prep from './response-preparation.js';
import xpath from 'xpath';
import xmldom from 'xmldom';
import {inHTMLData} from 'xss-filters';

/**
 * Transforms a work request data and the resulting work object from Open Search
 *
 * @return {Object}
 */
const WorkTransform = {
  event() {
    return 'getOpenSearchWork';
  },

  getWorkResult(request) {
    return this.callServiceClient('opensearch', 'getWorkResult', request);
  },

  requestTransform(event, request, connection) {
    let pid = inHTMLData(request.pid);
    pid = pid.substring(pid.indexOf(':') + 1);
    let q = 'dkcclterm.id=' + pid;
    return this.getWorkResult({
      query: q,
      start: request.offset,
      stepValue: request.worksPerPage,
      allObjects: request.allManifestations,
      agency: connection.libdata.config.agency
    });
  },

  getXPathSelector(xmlString) {
    // Document
    let doc = (new xmldom.DOMParser()).parseFromString(xmlString);

    // Namespaces in document
    let select = xpath.useNamespaces({
      'SOAP-ENV': 'http://schemas.xmlsoap.org/soap/envelope/',
      ac: 'http://biblstandard.dk/ac/namespace/',
      dc: 'http://purl.org/dc/elements/1.1/',
      dcterms: 'http://purl.org/dc/terms/',
      dkabm: 'http://biblstandard.dk/abm/namespace/dkabm/',
      dkdcplus: 'http://biblstandard.dk/abm/namespace/dkdcplus/',
      oss: 'http://oss.dbc.dk/ns/osstypes',
      xsi: 'http://www.w3.org/2001/XMLSchema-instance',
      opensearch: 'http://oss.dbc.dk/ns/opensearch'
    });

    /**
     * @method This method queries the xmldocument
     * @param selector, selecter is the xpath select to be used
     * @param first, first describes if first value is wanted.
     * @param allStrings, returns an array of unique strings matching selector
     */
    return (selector, first, allStrings) => {
      let val = select(selector, doc);
      if (first) {
        return val[0] && val[0].nodeValue ? val[0].nodeValue : '';
      }

      if (allStrings) {
        return val.map((node) => {
          return node.nodeValue;
        }).filter((value, index, self) => {
          return self.indexOf(value) === index;
        });
      }

      return val;
    };
  },

  responseTransform(response) {
    let data = {};
    data.info = {};
    data.error = [];
    data.work = {
      pid: '',
      title: '',
      fullTitle: '',
      alternativeTitle: '',
      creator: '',
      contributers: [],
      abstract: '',
      isbns: [],
      extent: '',
      actors: [],
      series: '',
      subjects: [],
      dk5s: [],
      audience: {
        age: [],
        pegi: '',
        medieraad: '',
        type: ''
      },
      tracks: [],
      languages: [],
      editions: []
    };

    let result = prep.checkResponse(response);

    if (result.hasOwnProperty('errorcode')) {
      data.error.push(result);
      return data;
    }

    data.info.hits = result.hits;
    data.info.collections = result.collections;

    if (result.collections === '0') {
      return data;
    }

    // Function which takes xpath
    let workDOM = this.getXPathSelector(response.raw);

    // Get general work information
    data.work.pid = workDOM('//opensearch:searchResult/opensearch:collection/opensearch:object/dkabm:record/opensearch:primaryObjectIdentifier/text()', true, false);
    data.work.title = workDOM('//opensearch:searchResult/opensearch:collection/opensearch:object/dkabm:record//dc:title/text()', true, false);
    data.work.fullTitle = workDOM('//opensearch:searchResult/opensearch:collection/opensearch:object/dkabm:record/dc:title[@xsi:type="dkdcplus:full"]/text()', true, false);
    data.work.alternativeTitle = workDOM('//opensearch:searchResult/opensearch:collection/opensearch:object/dkabm:record/dcterms:alternative/text()', true, false);
    data.work.creator = workDOM('//opensearch:searchResult/opensearch:collection/opensearch:object/dkabm:record/dc:creator[@xsi:type]/text()', true, false);
    data.work.contributers = workDOM('//opensearch:searchResult/opensearch:collection/opensearch:object/dkabm:record/dc:contributor/text()', false, true);
    data.work.abstract = workDOM('//opensearch:searchResult/opensearch:collection/opensearch:object/dkabm:record/dcterms:abstract/text()', true, false);
    data.work.actors = workDOM('//opensearch:searchResult/opensearch:collection/opensearch:object/dkabm:record/dc:contributor[@xsi:type="dkdcplus:act"]/text()', false, true);
    data.work.series = workDOM('//opensearch:searchResult/opensearch:collection/opensearch:object/dkabm:record/dc:description[@xsi:type="dkdcplus:series"]/text()', true, false);
    data.work.series = data.work.series.length > 0 ? data.work.series : workDOM(
      '//opensearch:searchResult/opensearch:collection/opensearch:object/dkabm:record/dc:title[@xsi:type="dkdcplus:series"]/text()',
      true,
      false
    );
    data.work.subjects = workDOM(
      '//opensearch:searchResult/opensearch:collection/opensearch:object/dkabm:record/*[@xsi:type="dkdcplus:DBCS" \
      or @xsi:type="dkdcplus:DBCF" or @xsi:type="dkdcplus:DBCM" or @xsi:type="dkdcplus:DBCO" or @xsi:type="dkdcplus:DBCP"]/text()',
      false,
      true
    );
    data.work.dk5s = workDOM('//opensearch:searchResult/opensearch:collection/opensearch:object\
    /dkabm:record/dc:subject[@xsi:type="dkdcplus:DK5"]/text()', false, true).map((dk5, index) => {
      const newIndex = index + 1;
      return {
        text: workDOM('//opensearch:searchResult/opensearch:collection/opensearch:object\
        /dkabm:record/dc:subject[@xsi:type="dkdcplus:DK5-Text"][' + newIndex + ']/text()', true, false),
        value: dk5
      };
    });
    data.work.audience.type = workDOM('//opensearch:searchResult/opensearch:collection/opensearch:object/dkabm:record/dcterms:audience/text()', true, false);
    data.work.audience.age = workDOM('//opensearch:searchResult/opensearch:collection/opensearch:object\
      /dkabm:record/dcterms:audience[@xsi:type="dkdcplus:age"]/text()', false, true);
    data.work.audience.medieraad = workDOM(
      '//opensearch:searchResult/opensearch:collection/opensearch:object/dkabm:record/dcterms:audience[@xsi:type="dkdcplus:medieraad"]/text()',
      true,
      false
    );
    data.work.audience.pegi = workDOM('//opensearch:searchResult/opensearch:collection/opensearch:object\
    /dkabm:record/dcterms:audience[@xsi:type="dkdcplus:pegi"]/text()', true, false);
    data.work.tracks = workDOM('//opensearch:searchResult/opensearch:collection/opensearch:object/dkabm:record/dcterms:hasPart[@xsi:type="dkdcplus:track"]/text()', false, true);
    data.work.languages = workDOM('//opensearch:searchResult/opensearch:collection/opensearch:object/dkabm:record/dc:language[not(@xsi:type)]/text()', false, true);

    // Iterate over manifestations, match them to a dkabm record and populate an object
    data.work.editions = workDOM('//opensearch:manifestation', false, false).map((manifestation, index) => {
      const newIndex = index + 1;
      let edition = {
        accessType: '',
        creator: '',
        date: '',
        edition: '',
        extent: '',
        identifier: '',
        isbns: [],
        issns: [],
        link: [],
        partOf: [],
        publisher: '',
        title: '',
        type: '',
        workType: ''
      };
      edition.accessType = workDOM('//opensearch:manifestation[' + newIndex + ']/opensearch:accessType/text()', true, false);
      edition.creator = workDOM('//opensearch:manifestation[' + newIndex + ']/opensearch:creator/text()', true, false);
      edition.date = workDOM('//opensearch:object[' + newIndex + ']/*/dc:date/text()', true, false);
      edition.edition = workDOM('//opensearch:object[' + newIndex + ']/*/dkdcplus:version/text()', true, false);
      edition.extent = workDOM('//opensearch:object[' + newIndex + ']/*/dcterms:extent/text()', true, false);
      edition.identifier = workDOM('//opensearch:manifestation[' + newIndex + ']/opensearch:identifier/text()', true, false);
      edition.isbns = workDOM('//opensearch:object[' + newIndex + ']/*/dc:identifier[@xsi:type="dkdcplus:ISBN"]/text()', false, true);
      edition.issns = workDOM('//opensearch:object[' + newIndex + ']/*/dc:identifier[@xsi:type="dkdcplus:ISSN"]/text()', false, true);
      edition.link = workDOM('//opensearch:object[' + newIndex + ']/*/dc:identifier[@xsi:type="dcterms:URI"]/text()', false, true);
      edition.partOf = workDOM('//opensearch:object[' + newIndex + ']/*/dcterms:isPartOf/text()', false, true);
      edition.publisher = workDOM('//opensearch:object[' + newIndex + ']/*/dc:publisher/text()', true, false);
      edition.title = workDOM('//opensearch:manifestation[' + newIndex + ']/opensearch:title/text()', true, false);
      edition.type = workDOM('//opensearch:manifestation[' + newIndex + ']/opensearch:type/text()', true, false);
      edition.workType = workDOM('//opensearch:manifestation[' + newIndex + ']/opensearch:workType/text()', true, false);

      return edition;
    });
    data.work.relations = workDOM('//opensearch:collection/opensearch:object/opensearch:relations/opensearch:relation', false, false).map((relation, index) => {
      const newIndex = index + 1;
      let rel = {
        link: '',
        type: '',
        access: '',
        accessType: '',
        collection: ''
      };
      rel.link = workDOM('//opensearch:object/opensearch:relations/opensearch:relation[' + newIndex + ']/opensearch:relationUri/text()', true, false);
      rel.type = workDOM('//opensearch:object/opensearch:relations/opensearch:relation[' + newIndex + ']/opensearch:relationType/text()', true, false);
      rel.access = workDOM('//opensearch:object/opensearch:relations/opensearch:relation[' + newIndex + ']/opensearch:linkObject/opensearch:access/text()', true, false);
      rel.accessType = workDOM('//opensearch:object/opensearch:relations/opensearch:relation[' + newIndex + ']/opensearch:linkObject/opensearch:accessType/text()', true, false);
      rel.collection = workDOM('//opensearch:object/opensearch:relations/opensearch:relation[' + newIndex + ']/opensearch:linkObject/opensearch:linkCollectionIdentifier/text()',
      false, true);
      return rel;

    });

    return data;
  }
};

export default WorkTransform;
