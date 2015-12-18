'use strict';

import {sortBy} from 'lodash';
import sanitizeHtml from 'sanitize-html';

const AffiliateListTransform = {

  event() {
    return 'getAllAffiliates';
  },

  requestTransform(event, query, connection) {
    query = query || {};

    try {
      query.agency = connection.libdata.config.provider.services.ddbcontent.agency;
      query.key = connection.libdata.config.provider.services.ddbcontent.key;
    } catch (e) {} // eslint-disable-line

    query.type = 'ding_library';
    query.amount = 100000;
    return this.callServiceClient('ddbcontent', 'getContentList', query);
  },

  responseTransform(response, query, connection) {
    let contentEndpoint;
    try {
      contentEndpoint = connection.libdata.config.provider.services.ddbcontent.endpoint + '/';
    }
    catch (e) {
      contentEndpoint = '/';
    }

    if (!response.items) {
      return [];
    }

    return response.items.map(item => {
      const {fields} = item;
      return {
        // The internal id from ddb cms
        id: item.id,

        // The title of the library
        title: fields.title.value || '',

        // A rich text description, we sanatize it to remove inline styles and unwanted tags.
        description: sanitizeHtml(fields.field_ding_library_body.value) || '',

        // A rich text lead description, we sanatize it to remove inline styles and unwanted tags.
        lead_description: sanitizeHtml(fields.field_ding_library_lead.value) || '',

        // List images, we get a relative url, so we append it to the full url afterwards.
        list_images: fields.field_ding_library_list_image.value.map((image) => {
          return contentEndpoint + image;
        }) || [],

        // Title images, we get a relative url, so we append it to the full url afterwards.
        title_images: fields.field_ding_library_title_image.value.map((image) => {
          return contentEndpoint + image;
        }) || [],

        // Sort by date, and extract the date, opening- and closing-time.
        opening_hours: sortBy(fields.opening_hours, (n) => {
          return new Date(n.date);
        }).map(
          (day) => {
            return {
              date: day.date,
              opening_time: day.start_time,
              closing_time: day.end_time
            };
          }
        ) || []
      };
    });
  }
};

export default AffiliateListTransform;
