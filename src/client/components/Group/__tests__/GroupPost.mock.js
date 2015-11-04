'use strict';

/**
 * Mock for groupPost
 */

export const groupPost = {
  groupId: 1,
  groupPostId: 1,
  groupPostData: {
    title: 'Pers post',
    content: 'Det her er Pers post',
    timeCreated: '2015-10-01T11:26:36.000Z',
    id: 1,
    postownerid: 1,
    postid: 2,
    groupid: 2,
    owner: {
      imageUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAgAElEQ…qKcqX5UEJbzyATS8Kd51J6gRrE/MyC7xDpMPHGNBo9Ifr5/y5yjHyVLRgeAAAAAElFTkSuQmCC',
      favoriteLibraries: [],
      email: 'asd@mailinator.com',
      id: 1
    },
    comments: [{
      content: 'Dette er en kommentar',
      timeCreated: '2015-10-01T11:26:36.000Z',
      id: 1,
      commentownerid: 1,
      postid: 1,
      owner: {
        imageUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAgAElEQ…qKcqX5UEJbzyATS8Kd51J6gRrE/MyC7xDpMPHGNBo9Ifr5/y5yjHyVLRgeAAAAAElFTkSuQmCC',
        favoriteLibraries: [],
        email: 'asd@mailinator.com',
        id: 1
      }
    }, {
      content: 'per',
      timeCreated: '2015-10-01T13:54:01.000Z',
      id: 2,
      commentownerid: 1,
      postid: 1,
      owner: {
        favoriteLibraries: [],
        email: 'asd@mailinator.com',
        id: 1
      }
    }]
  }
};

export const groupPostManyComments = {
  groupId: 1,
  groupPostId: 1,
  groupPostData: {
    title: 'Pers post',
    content: 'Det her er Pers post',
    timeCreated: '2015-10-01T11:26:36.000Z',
    id: 1,
    postownerid: 1,
    postid: 2,
    groupid: 2,
    owner: {
      imageUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAgAElEQ…qKcqX5UEJbzyATS8Kd51J6gRrE/MyC7xDpMPHGNBo9Ifr5/y5yjHyVLRgeAAAAAElFTkSuQmCC',
      favoriteLibraries: [],
      email: 'asd@mailinator.com',
      id: 1
    },
    comments: [{
      content: 'kommentar 1',
      timeCreated: '2015-10-01T13:54:02.000Z',
      id: 3,
      commentownerid: 1,
      postid: 1,
      owner: {favoriteLibraries: [], email: 'asd@mailinator.com', id: 1}
    }, {
      content: 'kommentar 2',
      timeCreated: '2015-10-01T13:54:03.000Z',
      id: 4,
      commentownerid: 1,
      postid: 1,
      owner: {favoriteLibraries: [], email: 'asd@mailinator.com', id: 1}
    }, {
      content: 'kommentar 3',
      timeCreated: '2015-10-01T13:54:04.000Z',
      id: 5,
      commentownerid: 1,
      postid: 1,
      owner: {favoriteLibraries: [], email: 'asd@mailinator.com', id: 1}
    }, {
      content: 'kommentar 4',
      timeCreated: '2015-10-01T13:54:04.000Z',
      id: 6,
      commentownerid: 1,
      postid: 1,
      owner: {favoriteLibraries: [], email: 'asd@mailinator.com', id: 1}
    }, {
      content: 'kommentar 5',
      timeCreated: '2015-10-01T13:54:04.000Z',
      id: 7,
      commentownerid: 1,
      postid: 1,
      owner: {favoriteLibraries: [], email: 'asd@mailinator.com', id: 1}
    }, {
      content: 'kommentar 6',
      timeCreated: '2015-10-01T13:54:04.000Z',
      id: 8,
      commentownerid: 1,
      postid: 1,
      owner: {favoriteLibraries: [], email: 'asd@mailinator.com', id: 1}
    }]
  }
};

