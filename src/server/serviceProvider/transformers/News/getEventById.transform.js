'use strict';

const EventByIdTransform = {

  event() {
    return 'getEventById';
  },

  requestTransform(event, query) {
    query.type = 'ding_event';
    return this.callServiceClient('ddbcontent', 'getContentById', query);
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
      image: fields.field_ding_news_list_image && fields.field_ding_news_list_image.value[0] || null
    };

    return data;
  }
};

export default EventByIdTransform;
