/**
 * @file: This file describes the default mappings for use in includes.
 */

import {schemas as actions} from './actions';
import {schemas as profile} from './profile';
import {schemas as entities} from './entities';

const schemas = {actions, profile, entities}

export function getRelatedModel(ownerName, mappingName, limit = 2, offset = 0, filter = []) {
  const ownerMapping = {
    Profile: {id: '^owner_id'},
    Include: schemas.profile.profile
  };

  const profileMapping = {
    Profile: {id: '^profile_id'},
    Include: schemas.profile.profile
  };

  const modifiedByMapping = {
    Profile: {id: '^modified_by'},
    Include: schemas.profile.profile
  };

  const models = {
    like: {
      owner: ownerMapping,
      profile: profileMapping,
      modified_by: modifiedByMapping
    },
    follow: {
      owner: ownerMapping,
      profile: profileMapping,
      modified_by: modifiedByMapping
    },
    flag: {
      owner: ownerMapping,
      profile: profileMapping,
      modified_by: modifiedByMapping
    },
    quarantine: {
      owner: ownerMapping,
      profile: profileMapping,
      modified_by: modifiedByMapping
    },
    profile: {
      modified_by: modifiedByMapping,
      likes: {
        Actions: {}
      }
    },
    group: {
      owner: ownerMapping,
      modified_by: modifiedByMapping,
      posts: {
        Entities: {type: 'post', entity_ref: '^id'},
        Limit: limit,
        Include: schemas.entities.post
      }
    },
    post: {
      owner: ownerMapping,
      modified_by: modifiedByMapping,
      comments: {
        Comment: {type: 'comment', entity_ref: '^id'},
        Limit: limit,
        Include: schemas.entities.comment
      }
    },
    comment: {
      owner: ownerMapping,
      modified_by: modifiedByMapping
    }
  };

  return models[ownerName][mappingName];
}
