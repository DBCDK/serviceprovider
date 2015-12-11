'use strict';

const NewsListTransform = {

  event() {
    return 'getNewsList';
  },

  requestTransform(event, query) {
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
        lead: fields.field_ding_news_lead && fields.field_ding_news_lead.value || null,
        body: fields.field_ding_news_body && fields.field_ding_news_body.value || null,
        image: fields.field_ding_news_list_image && fields.field_ding_news_list_image.value[0] || null
      };
    });
    return items;
  }
};

export default NewsListTransform;
