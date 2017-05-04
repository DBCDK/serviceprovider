import {assert} from 'chai';
import {parameterGroupToParameters} from '../specToPaths';

describe('SpecToPaths functions', () => {
  describe('parameterGroupToParameters', () => {
    const paths = {
      test: {
        get: {
          parameterGroup: 'testGroup',
          parameters: ['parameter1'],
        }
      }
    };
    const parameterGroups = {
      testGroup: ['parameter2', 'parameter3']
    };
    const expected = {
      parameters: ['parameter1', 'parameter2', 'parameter3']
    };
    it('should convert parameterGroup to parameters on path', () => {
      const result = parameterGroupToParameters(paths, parameterGroups);
      assert.deepEqual(result.test.get, expected);
    });
  });
});
