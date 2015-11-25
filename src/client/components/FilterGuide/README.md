# FilterGuide
The FilterGuide component shows a list of words that can be added to a query. 

### API
The component takes an array of elements and a callback function as properties

```javascript
// elements is an array of query objects with a value and type as minimum
const elements = [
    {
      value: 'harry',
      type: 'text'
    },
    {
      value: 'potter',
      type: 'text'
    },
  ];
  
  // The select callback is called when a user clicks on a filter element
  <FilterGuide 
    elements={elements} 
    select={callback} 
  />
```
