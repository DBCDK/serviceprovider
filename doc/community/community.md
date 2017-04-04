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

### This is a special endpoint that can generate a full group view, 
    /group/{id}/fullView (Custom parameters postLimit,commentslimit)

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

