# Endpoints

The following endpoints are defined in the community. 

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
    /profiles/{id}/follows
    /profiles/{id}/flags
    /profiles/{id}/quarantines

#### This is a special endpoint that will return an activity stream
    /profiles/{id}/activity (Special view with custom parameters)

#### Check if username is unique    
    /profile/usernameExists?name=

### On a group the following get commands can be applied
    /group/{id}/posts
    /group/{id}/likes
    /group/{id}/follows
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


## Parameters
### On all list endpoints it is possible to set the following parameters
* limit `(number) e.g. 10. default value is 10`
* offset `(number) e.g. 10. default value is 0`
* order (predefined values) `(string) default value is +created_date`
* filter (based on values in fields) `(string) properties of an object can be used as filters e.g. name=some_name`
### Includes 
Includes can be added to all entities and profiles and includes the following parameters
* limit
* offset
* order
* count
`(string) &include[0][type]=likes&include[0][limit]=10&include[0][count]=1`
A view profile will always be included on all entities.
