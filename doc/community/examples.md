# Examples
@todo Specify examples

## Getting startet
To get started with building a community, you will need a valid client and clientID, and the client needs to be configured with a valid community ID. To get this contact [XXX]

## CRUD Examples
### Create Profile
All Create and Update requests needs to be done with a valid profile. Except for Create profile.
To Create a profile, make a post request to the /profiles endpoint:

```javascript
const profile = {
    username: "Some Name",
};

request.post('/profiles', {body: profile});
```

Username is a required property.

To update a profile:

```javascript
const profile = {
    username: "Some Name",
};

request.put('/profiles/', {body: profile});
```


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
