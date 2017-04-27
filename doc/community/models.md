# Models

The following models are defined in the community. For full implementation details see the swagger documentation.

## Profile
* id `(number) user id`
* created_date `(date) date of creation`
* modified_date `(date) date of modification`
* deleted_date `(date) date of deletion`
* username `(string) unique username`
* display_name `(string) display username`
* description `(string) profile description`
* email `(string) user email`
* phone `(string) user phone number`
* birthday `(date) user birthday`
* media `(object) user profile image`
* attributes `(object) custom attributes`

## Group
* id `(number) Group id`
* created_date `(date) date of creation`
* modified_date `(date) date of modification`
* deleted_date `(date) date of deletion`
* title `(string) Group title`
* body `(string) Group description`
* profile_id `(number) Owner Id`
* media `(object) Group image`

## Post
* id `(number) Post id`
* created_date `(date) date of creation`
* modified_date `(date) date of modification`
* deleted_date `(date) date of deletion`
* title `(string) Post title`
* body `(string) Post content`
* group_id `(number) Group relation`
* profile_id `(number) Owner Id`
* media `(object) Post media object`

## Comment
* id `(number) Comment id`
* created_date `(date) date of creation`
* modified_date `(date) date of modification`
* deleted_date `(date) date of deletion`
* title `(string) Comment title`
* body `(string) Comment content`
* post_id `(number) Post relation`
* profile_id `(number) Owner Id`
* media `(object) Comment media object`

## Review
* id `(number) Review id`
* created_date `(date) date of creation`
* modified_date `(date) date of modification`
* deleted_date `(date) date of deletion`
* title `(string) Review title`
* body `(string) Review content`
* rating `(number) Rating value`
* profile_id `(number) Owner Id`
* reference `(object) reference object`
* media `(object) Comment media object`

## Like
* id `(number) Like id`
* created_date `(date) date of creation`
* profile_id `(number) Owner Id`
* reference `(object) reference object`

## Follow
* id `(number) Follow id`
* created_date `(date) date of creation`
* profile_id `(number) Owner Id`
* reference `(object) reference object`

## Flag
* id `(number) Flag id`
* created_date `(date) date of creation`
* profile_id `(number) Owner Id`
* reason `(string) Description of reason for flagging`
* reference `(object) reference object`

## Quarantine
* id `(number) Flag id`
* created_date `(date) date of creation`
* modified_date `(date) date of modification`
* deleted_date `(date) date of deletion`
* profile_id `(number) Owner Id`
* profile_ref `(string) Id of profile given quarantine`
* reason `(string) Reason for quarantine`
* start_date `(datetime) Quarantine start time`
* end_date `(datetime) Quarantine end time`
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
        "full": "http://image.it/my_profile_image.jpg"
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

### Reference
The reference object contains an id to the referenced object, and a type, indicating the type of object being referenced
```json
{
    "id": "1234",
    "type": "profile"
}
``` 
