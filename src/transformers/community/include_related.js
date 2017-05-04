/**
 * @file: This file describes the default mappings for use in includes.
 */

import {schemas as actions} from './actions';
import {schemas as profile} from './profile';
import {schemas as entities} from './entities';

const schemas = {actions, profile, entities};

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

  const likeMapping = {
    Actions: {type: 'like', entity_ref: '^id'},
    Limit: limit,
    Offset: offset,
    Include: schemas.actions.like
  };

  const flagMapping = {
    Actions: {type: 'flag', entity_ref: '^id'},
    Limit: limit,
    Offset: offset,
    Include: schemas.actions.flag
  };

  const quarantineMapping = {
    Actions: {type: 'like', entity_ref: '^id'},
    Limit: limit,
    Offset: offset,
    Include: schemas.actions.like
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
      likes: likeMapping,
      flags: flagMapping,
      quarantines: quarantineMapping,
      followers: {
        Actions: {type: 'member', entity_ref: '^id'},
        Limit: limit,
        Offset: offset,
        Include: schemas.actions.follow
      },
      posts: {
        Entities: {type: 'post', entity_ref: '^id'},
        Limit: limit,
        Offset: offset,
        Include: schemas.entities.post
      }
    },
    post: {
      owner: ownerMapping,
      modified_by: modifiedByMapping,
      likes: likeMapping,
      flags: flagMapping,
      comments: {
        Entities: {type: 'comment', entity_ref: '^id'},
        Limit: limit,
        Offset: offset,
        Include: schemas.entities.comment
      }
    },
    comment: {
      owner: ownerMapping,
      modified_by: modifiedByMapping,
      likes: likeMapping,
      flags: flagMapping
    }
  };

  // Plural names
  models.posts = models.post;
  models.comments = models.comment;
  models.likes = models.like;
  models.followers = models.follow;
  models.flags = models.flag;
  models.quarantines = models.quarantine;

  // Return whatever we find.
  return models[ownerName][mappingName];
}
