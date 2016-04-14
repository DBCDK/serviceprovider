'use strict';

import {isArray} from 'lodash';

const NewsByIdTransform = {

  event() {
    return 'getNewsById';
  },

  requestTransform(event, query) {
    query.type = 'ding_news';
    return this.callServiceClient('ddbcontent', 'getContentById', query);
  },

  toArray(element) {
    return isArray(element) && element || [element];
  },

  responseTransform(response, query) {
    if (!response.items || response.items.length === 0) {
      return {nid: query.node, error: 'unknown id'};
    }
    const item = response.items;
    const {fields} = item;

    const data = {
      id: item.id,
      nid: item.nid,
      title: fields.title && fields.title.value || null,
      lead: fields.field_ding_news_lead && fields.field_ding_news_lead.value || null,
      body: fields.field_ding_news_body && fields.field_ding_news_body.value || null,
      image: fields.field_ding_news_list_image && fields.field_ding_news_list_image.value[0] || null,
      titleImage: fields.field_ding_news_title_image && fields.field_ding_news_title_image.value[0] || null,
      relatedWorks: fields.field_ding_news_materials && this.toArray(fields.field_ding_news_materials.value) || []
    };

    return data;
  }
};

export default NewsByIdTransform;
