'use strict';

import {isArray, isEmpty} from 'lodash';

const PopSuggestTransform = {

  event() {
    return 'getPopSuggestions';
  },

  getPopSuggestionsRequest(query) {
    let requests = [];

    requests.push(this.callServiceClient('popsuggest', 'getPopSuggestions', {
      index: 'display.title',
      query: query.replace(' ', '%5C%20'), // prepending a \ to whitespace in query string
      fields: ['fedoraPid', 'display.title']
    }));

    requests.push(this.callServiceClient('entitysuggest', 'getCreatorSuggestions', {
      query: query
    }));

    requests.push(this.callServiceClient('entitysuggest', 'getSubjectSuggestions', {
      query: query
    }));

    return requests;
  },

  requestTransform(event, query) {
    if (event === 'getPopSuggestions') {
      return this.getPopSuggestionsRequest(query);
    }
  },

  responseTransform(response, query) {
    let data = {};
    if (response.error) {
      data = {
        error: true,
        statusCode: response.error.statusCode,
        statusMessage: response.error.statusMessage
      };
    }
    else if (response.params && response.params.service && response.params.service === 'entity-suggest') {
      if (isEmpty(response.response.suggestions)) {
        data.isEmpty = true;
        data.index = this.getEntitySuggestIndex(response.params.method);
      }
      else {
        data = this.parseEntitySuggestData(response, query);
      }
    }
    else if (isEmpty(response.response.docs)) {
      data.isEmpty = true;
      data.index = this.getIndex(response);
    }
    else {
      data = this.parseData(response, query);
      data.query = query;
    }
    return data;
  },

  getIndex(response) {
    let index = '';
    if (isArray(response.responseHeader.qf)) {
      index = response.responseHeader.qf.join();
    }
    else {
      index = response.responseHeader.qf.join();
    }

    return index.replace(',rec.collectionIdentifier', '');
  },

  /**
   * Parse data coming from the entity-suggest service
   */
  parseEntitySuggestData(response, query) {
    const index = this.getEntitySuggestIndex(response.params.method);
    const docs = [];

    const numItems = (response.response.suggestions.length <= 5) ? response.response.suggestions.length : 5;

    for (let i = 0; i < numItems; i++) {
      if (response.response.suggestions[i]) {
        docs.push({text: response.response.suggestions[i].suggestion});
      }
    }

    return {index: index, docs: docs, query: query};
  },

  getEntitySuggestIndex(indx) {
    let index = '';
    if (indx === 'creator') {
      index = 'display.creator';
    }
    else if (indx === 'subject') {
      index = 'term.subject';
    }
    return index;
  },

  /**
   * Parse data coming from the suggest service
   */
  parseData(response, query) {
    const index = this.getIndex(response);
    let data = {
      index: index,
      docs: []
    };

    const parsedDocs = this.parseDocs(response.response.docs, index, query);
    if (parsedDocs.length) {
      data.docs = parsedDocs;
    }

    return data;
  },

  parseDocs(docs, index, query) {
    let parsedDocs = [];
    docs.forEach((value, key) => {
      let shouldStopFilter = false;
      if (value[index] && key < 5) {
        const text = value[index].filter((string) => {
          if (!shouldStopFilter && string.toLowerCase().lastIndexOf(query.toLowerCase(), 0) === 0) {
            shouldStopFilter = true;
            return true;
          }
          return false;
        });
        parsedDocs.push({
          text: isArray(text) ? text.pop() : text,
          pid: value.fedoraPid || null
        });
      }
    });

    return parsedDocs;
  }
};

export default PopSuggestTransform;
