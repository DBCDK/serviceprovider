# Examples

The examples on this page is written in javascript, and uses the request library (https://github.com/request/request) to make requests.

## Getting startet
To get started with building a community, you will need a valid client and clientID, and the client needs to be configured with a valid community ID. 
To apply for access, contact [https://kundeservice.dbc.dk/](https://kundeservice.dbc.dk/).

## Handling profiles
All users of the communityservice needs a profile, to be able to create and update content. 
  
### Create Profile
All Create and Update requests needs to be done with a valid profile. Except for Create profile.
To Create a profile, make a post request to the /profiles endpoint:

```javascript
const profile = {
    username: "Some Name",
};

request.post(openplatform_uri + 'community/profiles', {json: profile, qs:{access_token: 'qwerty'}}, (err, response, body) => {
  console.log(body);
});
```

**Response body:**
```javascript
{ status: 200,
  data: 
    { username: 'Some Name',
      created_epoch: 1493107039,
      modified_epoch: 1493107039,
      id: 8 },
   errors: [] }
```

Username is a required property.

### Get Profile
To Get a profile, make a get request to `community/profiles/{id}` where id is the id of the profile.

```javascript
const profile = {
    username: "Some Name",
};

request.post(openplatform_uri + 'community/profiles', {json: profile, qs:{access_token: 'qwerty'}}, (err, response, body) => {
  console.log(body);
});

```

**Response body:**
```javascript
{ status: 200,
  data: 
  { username: 'Some Name',
    created_epoch: 1493107039,
    modified_epoch: 1493107039,
    id: 8 },
  errors: [] }

```


### Update profile

To update a profile, make a `PUT` request to `community/profiles/{id}` where id is the id of the profile that needs to be updated. `modified_by` is a required parameter in the body, 
and identifies the id of the profile doing the update. This will most often be the owner of the profile, but could also be an admin or moderator.  

```javascript
const id = 8;
const profile = {
  displayName: "My real name",
  modified_by: id
};
request.put(openplatform_uri + 'community/profiles/' + id, {json: profile, qs:{access_token: 'qwerty'}}, (err, response, body) => {
  console.log(body);
});

```

Only the values specified on the profile are updated. In the example above example `displayName` is changed, and `username` remains the same

**Response body:**
```javascript
 { status: 200,
   data: 
    { username: 'Some Name',
      displayName: 'My real name',
      created_epoch: 1493107039,
      modified_epoch: 1493109211,
      modified_by: 8,
      id: 8 },
   errors: [] }
```

The `modified_epoch` value is automatically updated on update. 

### Delete profile

To update a profile, make a `DELETE` request to `community/profiles/{id}` where id is the id of the profile that needs deleted. `modified_by` is a required parameter in the body, 
and identifies the id of the profile deleting.  
 
```javascript
const id = 8;
const profile = {
  modified_by: id
};
request.delete(openplatform_uri + 'community/profiles/' + id, {json: profile, qs:{access_token: 'qwerty'}}, (err, response, body) => {
  console.log(body);
});
```

**Response body:**
```javascript
 { status: 200,
   data: 
    { username: 'Some Other Name',
      displayName: 'My real name',
      created_epoch: 1493107039,
      modified_epoch: 1493109211,
      modified_by: 8,
      deleted_epoch: 1493110073, // value is set on delete
      id: 8 },
   errors: [] }
```

If delete is successful, response body includes the full profile, with the `deleted_epoch` value set. 

## Setting up a community
A community is organised around three types of content. Groups, Posts and Comments. These types creates a hierarchy 
A Group is the top level. Inside a group users can create Posts, and users can comment on posts. This enables threaded discussions on two levels. 

### Creating a group  
Start by creating a group. A group only requires an owner_id that points to a community profile. A group also have a title, body, media and attributes field. 
  
```javascript
const group = {
    title: "A group about something",
    body: "This should not be about nothing"
    owner_id: 1
};

request.post(openplatform_uri + 'community/groups', {json: group, qs:{access_token: 'qwerty'}}, (err, response, body) => {
  console.log(body);
});
```

**Response body:**
```javascript
{ status: 200,
  data: 
   { title: 'A group about something',
     body: 'This should not be about nothing',
     id: 2,
     modified_epoch: 1493122861,
     created_epoch: 1493122861,
     owner_id: 1 },
  errors: [] }
```


### Add Post to Group
  
```javascript
const post = {
    title: "",
    body: "This is a post in Group with id 2",
    owner_id: 1,
    group_id: 2
};

request.post(openplatform_uri + 'community/posts', {json: post, qs:{access_token: 'qwerty'}}, (err, response, body) => {
  console.log(body);
});
```

**Response body:**
```javascript
{ status: 200,
  data: 
   { title: '',
     body: 'This is a post in Group with id 2',
     group_id: 2,
     id: 5,
     modified_epoch: 1493123760,
     created_epoch: 1493123760,
     owner_id: 1 },
  errors: [] }
```

### Add Comment to Post
  
```javascript
const comment = {
    title: "",
    body: "This is a comment in Group 2 Post 5",
    owner_id: 1,
    post_id: 5
};

request.post(openplatform_uri + 'community/comments', {json: comment, qs:{access_token: 'qwerty'}}, (err, response, body) => {
  console.log(body);
});
```

**Response body:**
```javascript
{ status: 200,
  data: 
   { title: '',
     body: 'This is a comment in Group 2 Post 5',
     post_id: 5,
     id: 6,
     modified_epoch: 1493123760,
     created_epoch: 1493123760,
     owner_id: 1 },
  errors: [] }
```

### Get, Update and Delete
Get, Update and Delete operations on Groups, Posts, and Comments, are similar to the corresponding operations on a profile.  

**GET: Group with ID 2**
```javascript
request.get(openplatform_uri + 'community/groups/2', {json: editGroup, qs:{access_token: 'qwerty'}}, (err, response, body) => {
  console.log(body);
});
```

**PUT: Update Group with ID 2**
```javascript
const editGroup = {
    title: "This is a new title",
    modified_by: 1
};

request.put(openplatform_uri + 'community/groups/2', {json: editGroup, qs:{access_token: 'qwerty'}}, (err, response, body) => {
  console.log(body);
});
```

**DELETE; Group with ID 2**
```javascript
const deleteGroup = {
    modified_by: 1
};

request.delete(openplatform_uri + 'community/groups/2', {json: deleteGroup, qs:{access_token: 'qwerty'}}, (err, response, body) => {
  console.log(body);
});
```

## Actions
### Follow group
### Unfollow group
### Like post
### unLike post

## Moderation
### Flag profile
### Qarantine profile

## Reviews
 ### Create review
 ### Edit review


## Query Examples
### Get 10 latest followers
### Generate group view
### Get activity feed
### Get all quarantined profiles
