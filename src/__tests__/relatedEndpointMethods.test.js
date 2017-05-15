import {assert} from 'chai';
import {getSelector} from '../transformers/community/utils/relatedEndpointMethods';

describe('getRelatedList functions', () => {
  describe('getSelector', () => {

    it('should return profile selector', () => {
      const result = getSelector('profile', 'test', 1);
      assert.deepEqual(result, {
        type: 'test',
        profile_ref: 1
      });
    });

    it('should return group selector', () => {
      const result = getSelector('group', 'test', 1);
      assert.deepEqual(result, {
        type: 'test',
        entity_ref: 1
      });
    });

    it('should return action reference', () => {
      const result = getSelector('profile', 'like', 1);
      assert.deepEqual(result, {
        type: 'like',
        profile_ref: 1,
        'attributes.reference': {
          type: 'profile'
        }
      });
    });

  });
});
