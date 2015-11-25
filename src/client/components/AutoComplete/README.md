# AutoComplete
Component that delivers a generic autocomplete functionality.

No input field is provided within this component as it should be attached an existing input field in your application.

## API
This autocomplete component takes the following properties when implemented:

### visible (boolean)
  Defines whether the autocomplete shuld be visible a not.
  This is controlled by CSS and the AutoCompleteContainer will always be rendered with the `autocomplete--container` class.
  In addition, if the `visible` property, is anything but `true` will `autocomplete--container-hidden` be rendered along with the above class which makes it possible to control visiblity through CSS. 
  Default value is `false`  

```javascript
  // This will show the autocomplete 
  <AutoComplete visible={true} />
  
  // This will hide the autocomplete 
  <AutoComplete visible={false} />
```

### data (Array)
The data to be shown in the autocomplete container.  
This data should be structured as JSON-objects wrapped in an array. See below for an example.  

```javascript
  //data example
  const data = [
    {
      label: 'Title', // could also be href: <a href={'/some/path} >Title</a>
      data: [
        {
          text: 'Test Hest',
          image: 'http://dummyimage.com/50x50/000/fff'
        }
      ]
    },
    {
      label: 'Author',
      data: [
        {
          text: 'Hest Hest',
          href: 'some/path/to/go/to',
          image: ''
          imageComp: <SomeReactComponent /> // if both img and imageComp the latter will be rendered
        },
        {
          text: 'Fest Hest',
          image: ''
        }
      ]
    }];
    
    //implemntation example
    <AutoComplete visible={true} data={data} />
```

### errormessage (String)
The errormessage is rendered when no data is availiable in the component, for example when no results are found.
See below for example usage.

```javascript
  // errormessage example
  const errormessage = "This is an error message";
    
    //implemntation example
    <AutoComplete visible={true} errormessage={errormessage} />
```
