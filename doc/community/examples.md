# Examples

The examples on this page is written in javascript, and uses the request library (https://github.com/request/request) to make requests.

## Getting startet
To get started with building a community, you will need a valid client and clientID, and the client needs to be configured with a valid community ID. 
To apply for access, contact [https://kundeservice.dbc.dk/](https://kundeservice.dbc.dk/). A valid token is required for all requests. 

### Responses
Responses are returned within an envelope, as a JSON object with the following properties:

* statusCode contains the status of the request, ie 200 if it went ok.
* data contains the actual response, if applicable
* error contains an error, if applicable


### Request a valid token
```javascript

const req = {
    form: {
        grant_type: 'password',
        username: username,
        password: password
    },
    auth: {
      user: config.clientId,
      pass: config.clientSecret
    }
};

request.post(smaug_uri + 'oauth/token', req, (err, response, body) => {
  console.log(body);
});
```

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

**node request**
```javascript
request.get(openplatform_uri + 'community/profiles', {qs:{access_token: 'qwerty'}}, (err, response, body) => {
  console.log(body);
});

```

**request URL**
`https://openplatform.dbc.dk/v1/community/profiles/1?access_token=qwerty`

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

Actions are events that can be applied to content as Groups, Posts, Comments, Reviews and Profiles. There are two types of actions Likes and Follow. Actions can be created and deleted. 

### Like post

```javascript
const like = {
    owner_id: 1,
    
    reference: {
        type: "post",
        id: 5 
    }
};

request.post(openplatform_uri + 'community/likes', {json: like, qs:{access_token: 'qwerty'}}, (err, response, body) => {
  console.log(body);
});
```

**Response body:**
```javascript
{ status: 200,
  data: 
   { id: 10,
     reference: {
        type: "post",
        id: 5
     },
     modified_epoch: 1493123760,
     created_epoch: 1493123760,
     owner_id: 1 },
  errors: [] }
```

### unlike post

To remove a like from a post, make a delete request with modified_by set:

```javascript

const like = {
    modified_by: 1,
};

request.delete(openplatform_uri + 'community/likes/', {json: like, qs:{access_token: 'qwerty'}}, (err, response, body) => {
  console.log(body);
});
```

**Response body:**
```javascript
{ status: 200,
  data: 
   { id: 10,
     reference: {
        type: "post",
        id: 5
     },
     modified_epoch: 1493123760,
     created_epoch: 1493123760,
     deleted_epoch: 1493123760,
     owner_id: 1 },
  errors: [] }
```


### Follow Content

Follow is done in the same way as likes. by using the endpoint: `community/follows` 

## Moderation
Moderation is done by flagging content created by a user and adding a Quarantine to a Profile.

### Flag profile

```javascript
// Flag profile with id 5 
const flag = {
    owner_id: 1,
    reference: {
     type: 'profile',
     id: 5
    },
    reason: "Some reason for flagging"
};

request.post(openplatform_uri + 'community/flags', {json: like, qs:{access_token: 'qwerty'}}, (err, response, body) => {
  console.log(body);
});
```

**Response body:**
```javascript
{ status: 200,
  data: 
   { id: 11,
     reference: {
        type: "profile",
        id: 5
     },
     reason: "Some reason for flagging",
     modified_epoch: 1493123760,
     created_epoch: 1493123760,
     owner_id: 1 },
  errors: [] }
```

### Qarantine profile

A quarantine should have a reason for giving the quarantine, a start timestamp and an end timestamp. Optionally an array of flag ids as documentation for the reason.   
  
```javascript
const quarantine = {
    reason: "This is the reason for the quarantine",
    start_epoch: 1493123760,
    end_epoch: 1493983760,
    owner_id: 1,
    flags: [11]
};

request.post(openplatform_uri + 'community/quarantine', {json: quarantine, qs:{access_token: 'qwerty'}}, (err, response, body) => {
  console.log(body);
});
```

**Response body:**
```javascript
{ status: 200,
  data: 
   { id: 12,
     modified_epoch: 1493123760,
     created_epoch: 1493123760,
     owner_id: 1,
     reason: "This is the reason for the quarantine",
     start_epoch: 1493123760,
     end_epoch: 1493983760,
     owner_id: 1,
     flags: [11]
  },
  errors: [] }
```

## Reviews
 ### Create review
 A review contains a title, body, rating, and a reference to the object being reviewed. 
   
```javascript
const quarantine = {
    title: "This is a title for the review",
    body: "This is the actual review",
    rating: 3
    owner_id: 1,
    reference: {
        type: 'pid',
        id: '870970-basis:50841316'
    }
};

request.post(openplatform_uri + 'community/reviews', {json: quarantine, qs:{access_token: 'qwerty'}}, (err, response, body) => {
  console.log(body);
});
```

**Response body:**
```javascript
{ status: 200,
  data: 
   { id: 13,
     modified_epoch: 1493123760,
     created_epoch: 1493123760,
     owner_id: 1,
     title: "This is a title for the review",
     body: "This is the actual review",
     rating: 3
     reference: {
         type: 'pid',
         id: '870970-basis:50841316'
     }
  },
  errors: [] }
```
 
A review can be edited and deleted in the same way as a Profile

## Querying thing 
The examples are querying groups, but can be applied to all types of content. 

### limit
the maximum number of items to return

### offset
offset. The first item to return.

### sort
the key to sort items by. The key can be any key in the model. 

### order
The order of items (descending or ascending)

### Example

```javascript
const query = {
    access_token: 'qwerty'
    limit: 2,
    offset: 0,
    sort: 'created_epoc',
    order: 'descending'
}

request.get(openplatform_uri + 'community/groups', {qs:query}, (err, response, body) => {
  console.log(body);
});
```

**url request**
`https://openplatform.dbc.dk/v1/community/groups/?access_token=qwerty&limit=10&offset=0&sort=created_epoch&order=descending`

### include
The include parameter enables a set of complex queries for nested data structures. Include has to be a json formatted array of types of objects that should be included e.g. `include=["owner", "posts", "likes"]`

It is also possible to add nested parameters e.g. for limitting, filtering, ordering. As well as creating nested includes. This is done by turning an include into an json object.

`include=[{"name": "posts", "limit": 10, offset: 0}]`

To create nested includes add an include property, to the included object:

`include=[{"name": "posts", "include": ["owner"]]`
 
    
```javascript

// This request will return a list of posts to group with id 1, and include max 2. comments with included owner for each post 
const qs = {
 access_token: 'qwerty',
  include: `[
    {
      "name": "comments",
      "limit": 2,
      "offset": 0,
      "include": ["owner"]
    }
  ]`
} 

request.get(openplatform_uri + 'community/groups/1/posts', {qs: qs}, (err, response, body) => {
  console.log(body);
});
```

**Response body:**
```javascript
{
    "status": 200,
    "data": {
        "Total": 2,
        "NextOffset": null,
        "List": [
            {
                "title": "Ab consectetur nisi",
                "body": "some body",
                "group_id": 1,
                "profile_id": 469,
                "created_epoch": 1490363218,
                "deleted_epoch": null,
                "modified_epoch": 1490363218,
                "modified_by": null,
                "id": 419,
                "comments": {
                    "Total": 1,
                    "NextOffset": null,
                    "List": [
                        {
                            "title": "",
                            "body": "This is a comment for post 419",
                            "post_id": 419,
                            "media": {
                                "type": "image",
                                "value": {
                                    "full": "http://lorempixel.com/1600/800/",
                                    "thumb": "http://lorempixel.com/400/200/"
                                }
                            },
                            "profile_id": 1,
                            "created_epoch": 1493888056,
                            "deleted_epoch": null,
                            "modified_epoch": 1493888056,
                            "modified_by": null,
                            "id": 6484,
                            "owner": {
                                "id": 1,
                                "modified_epoch": 1490363149,
                                "created_epoch": 1490363149,
                                "deleted_epoch": null,
                                "username": "Marjolaine",
                                "modified_by": null,
                                "email": "Jazmyn_Gleason@gmail.com"
                            }
                        }
                    ]
                }
            },
            {
                "title": "At velit perferendis",
                "body": "Aut dolorum sed velit",
                "group_id": 1,
                "profile_id": 316,
                "created_epoch": 1490363215,
                "deleted_epoch": null,
                "modified_epoch": 1490363215,
                "modified_by": null,
                "id": 340,
                "comments": {
                    "Total": 0,
                    "NextOffset": null,
                    "List": []
                }
            }
        ]
    },
    "errors": []
}

```

### Get 10 latest posts for a group
By using the nested endpoints, you can get a list of related objects. E.g. you can get the latest posts for a group calling `community/groups/{id}/posts`

```javascript
const query = {
    access_token: 'qwerty'
    limit: 10,
    offset: 0,
    sort: 'created_epoc',
    order: 'descending'
}

request.post(openplatform_uri + 'community/groups/2/posts', {qs:query}, (err, response, body) => {
  console.log(body);
});
```

This request will return a list of posts written in group with ID 2.

**Response body:**
```javascript
{ status: 200,
  data:{
   List: [
    { /*post*/ },
    { /*post*/ },
    { /*post*/ },
    ...
    ]
  errors: [] }
```

## Special views
The community has three special endpoints, that can be used to. 

### Generate group view
@todo create example of how to create a group view

### Get activity feed
@todo create example of how to create an activity feed

### Get all quarantined profiles
@todo create example of how to create quarantined profiles

## Errors
There are basically two types of errors. Validation errors that is caused by an invalid request, and unexpected error, that is caused by unknown causes 

### Validation Error
If post and put request does not validate, An error object is returned, with a message of which fields does not validate:

```javascript
{
  "status": 400,
  "errors": " requires property \"body\"",
  "data": []
}
```

### Unexpected Error
An unexpected error has the following format
```javascript
{
  "code": 500,
  "message": "Some errormessage",
}
```
