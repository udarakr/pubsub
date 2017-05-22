## simple pubsub javascript library

### Usage

- Include the file pubsub.js.
- Create a subscribtion using,

```
pubsub.subscribe( 'TEST_TOPIC', function(topic, data, id){
    console.log( topic, data );
}, id);
```

- Publish using,

```
pubsub.publish('hi there!', 'TEST_TOPIC');
```