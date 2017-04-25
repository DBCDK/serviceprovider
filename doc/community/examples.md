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

// Response body:
// { status: 200,
//   data: 
//    { username: 'Some Name',
//      created_epoch: 1493107039,
//      modified_epoch: 1493107039,
//      id: 8 },
//   errors: [] }

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

// Response body:
// { status: 200,
//   data: 
//    { username: 'Some Name',
//      created_epoch: 1493107039,
//      modified_epoch: 1493107039,
//      id: 8 },
//   errors: [] }

```


### Update profile

To update a profile, make a `PUT` request to `community/profiles/{id}` where id is the id of the profile that needs to be updated. `modified_by` is a required parameter in the body, 
and identifies the id of the profile doing the update. This will most often be the owner of the profile, but could also be an admin or moderator.  

```javascript
const id = 8;
const profile = {
  username: "Some Other Name",
  displayName: "My real name",
  modified_by: id
};
request.put(openplatform_uri + 'community/profiles/' + id, {json: profile, qs:{access_token: 'qwerty'}}, (err, response, body) => {
  console.log(body);
});

// Response body:
// { status: 200,
//   data: 
//    { username: 'Some Other Name',
//      displayName: 'My real name',
//      created_epoch: 1493107039,
//      modified_epoch: 1493109211,
//      modified_by: 8,
//      id: 8 },
//   errors: [] }


```

The modified_epoch value is automatically updated on update. 

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

// Response body:
// { status: 200,
//   data: 
//    { username: 'Some Other Name',
//      displayName: 'My real name',
//      created_epoch: 1493107039,
//      modified_epoch: 1493109211,
//      modified_by: 8,
//      deleted_epoch: 1493110073, <- value is set
//      id: 8 },
//   errors: [] }


```

If deletion is successful, response body includes the full profile, with the `deleted_epoch` value set. 

## Examples

### Create Group
### Add post to group
### Add comment to post
### Follow group
### Unfollow group
### Like post
### unLike post
### Create review
### Edit review
### Flag profile
### Qarantine profile

## Query Examples
### Get 10 latest followers
### Generate group view
### Get activity feed
### Get all quarantined profiles
