/**
 * Mock for groupPost
 * @type {{groupId: number, groupPostId: number, groupPostData: {title: string, content: string, timeCreated: string, id: number, postownerid: number, postid: number, groupid: number, owner: {imageUrl: string, favoriteLibraries: Array, realm: null, email: string, id: number}, comments: *[]}}}
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
      realm: null,
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
        imageUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAgAElEQ…qKcqX5UEJbzyATS8Kd51J6gRrE/MyC7xDpMPHGNBo9Ifr5/y5yjHyVLRgeAAAAAElFTkSuQmCC',
        favoriteLibraries: [],
        email: 'asd@mailinator.com',
        id: 1
      }
    }]
  }
};
