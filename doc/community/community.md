# Models
@todo Specify models.

* Profile
* Group
* Post
* Comment
* Review
* Like
* Follow
* Flag
* Quarantine

# Endpoints

### The community service includes the following basic models/endpoints. CRUD operations kan be done on all these endpoints. 
    /profiles
    /quarantines
    /groups
    /posts
    /comments
    /reviews
    /likes
    /follows
    /flags

### On a profile you can do the following get commands. 
    /profiles/{id}/likes
    /profiles/{id}/following
    /profiles/{id}/followers
    /profiles/{id}/flags
    /profiles/{id}/quarantines
#### This is a special endpoint that will return an activity stream
    /profiles/{id}/activity (Special view with custom parameters)

### On a group the following get commands can be applied
    /group/{id}/posts
    /group/{id}/likes
    /group/{id}/followers
    /group/{id}/flags

#### Generate a full group view, 
    /group/{id}/fullView (Custom parameters postLimit,commentslimit)
#### Check if profile is following group
    /group/{id}/isFollowing/{profileId}
    
#### Check if group name is unique    
    /group/groupNameExists?name=

### On a post the following get commands can be applied. 
    /post/{id}/likes
    /post/{id}/flags
    /post/{id}/comments

### On review the following get commands can be applied
    /reviews/{id}/likes
    /reviews/{id}/flags

### On all list endpoints it is possible to set the following parameters
    * limit
    * offset
    * order (predefined values)
    * filter (based on values in fields) 
### On all entities + profiles 
    * include (predefined relations)
A view profile will always be included on all entities.

# Examples
@todo Specify examples

## CRUD Examples
### Create Profile
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


