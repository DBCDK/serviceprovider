'use strict';

const EventListTransform = {

  event() {
    return 'getEventList';
  },

  requestTransform(event, query) {
    query.type = 'ding_event';
    return this.callServiceClient('ddbcontent', 'getContentList', query);
  },

  responseTransform(response) {
    if (!response.items) {
      return [];
    }
    const items = response.items.map(item => {
      const {fields} = item;
      return {
        id: item.id,
        nid: item.nid,
        title: fields.title && fields.title.value || null,
        start: fields.field_ding_event_date.value.from,
        lead: fields.field_ding_event_lead && fields.field_ding_event_lead.value || null,
        body: fields.field_ding_event_body && fields.field_ding_event_body.value || null,
        image: fields.field_ding_event_list_image && fields.field_ding_event_list_image.value[0] || null
      };
    });
    return items;
  }
};

export default EventListTransform;
