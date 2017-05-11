# Models

The following models are defined in the community. For full implementation details see the swagger documentation.

## Profile
* id `(number) user id`
* created_date `(date) date of creation`
* username `(string) unique username`
* displayname `(string) display username`
* description `(string) profile description`
* email `(string) user email`
* phone `(string) user phone number`
* birthday `(date) user birthday`
* fullname `(string) user full name`
* image `(object) user profile image`
* attributes `(object) custom attributes`

## Group
* id `(number) Group id`
* created_date `(date) date of creation`
* title `(string) Group title`
* body `(string) Group description`
* owner_id `(number) Owner Id`
* image `(object) Group image`

## Post
* id `(number) Post id`
* created_date `(date) date of creation`
* title `(string) Post title`
* body `(string) Post content`
* owner_id `(number) Owner Id`
* media `(object) Post media object`
* group_id `(number) Group relation`

## Comment
* id `(number) Comment id`
* created_date `(date) date of creation`
* title `(string) Comment title`
* body `(string) Comment content`
* owner_id `(number) Owner Id`
* media `(object) Comment media object`
* post_id `(number) Post relation`

## Review
* id `(number) Review id`
* created_date `(date) date of creation`
* title `(string) Review title`
* body `(string) Review content`
* rating `(number) Rating value`
* owner_id `(number) Owner Id`
* ref_id `(string) Id of reference being reviewed`
* ref_type `(string) Type of object being reviewed`
* media `(object) Comment media object`

## Like
* id `(number) Like id`
* created_date `(date) date of creation`
* owner_id `(number) Owner Id`
* ref_id `(string) Id of object being liked`
* ref_type `(string) Type of object being liked`

## Follow
* id `(number) Follow id`
* created_date `(date) date of creation`
* owner_id `(number) Owner Id`
* ref_id `(string) Id of object being followed`
* ref_type `(string) Type of object being followed`

## Flag
* id `(number) Flag id`
* created_date `(date) date of creation`
* owner_id `(number) Owner Id`
* ref_id `(string) Id of object being flagged`
* ref_type `(string) Type of object being flagged`

## Quarantine
* id `(number) Flag id`
* created_date `(date) date of creation`
* owner_id `(number) Owner Id`
* profile_ref `(string) Id of profile given quarantine`
* quarantine_reason `(string) Reason for quarantine`
* quarantine_start `(datetime) Quarantine start time`
* quarantine_end `(datetime) Quarantine end time`
* flags `(list) list of flag ids causing the quarantine`

## Complex properties

This is a description of the the complex properties used in the models described above. 

### Media
Specifies both a type and value of media. The value is an object containing reference to the different sizes of the media element 

Formatted as a json object
```json
{
    "type": "image",
    "value": {
        "full": "http://image.it/my_profile_image.jpg",
        "thumb": "http://image.it/my_profile_image_thumb.jpg"
    }
}
``` 


### Attributes
The attributes property contains custom values specific to the community. Formatted as a json object
```json
{
    "fav_color": "red",
    "interests": ["cars", "horses", "books"]
}
``` 


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


## Parameters
### On all list endpoints it is possible to set the following parameters
* limit `(number) e.g. 10. default value is 10`
* offset `(number) e.g. 10. default value is 0`
* order (predefined values) `(string) default value is +created_date`
* filter (based on values in fields) `(string) properties of an object can be used as filters e.g. name=some_name`
### On all entities + profiles 
* include (predefined relations) `(string) list of relations to include e.g. include=likes,followers,comments`
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


