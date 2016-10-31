## simple pubsub javascript library

### Usage

- Include the file pubsub.js.
- Create a subscribtion using,

```
pubsub.subscribe( 'TEST_TOPIC', function(topic, data){
    console.log( topic, data );
});
```

- Publish using,

```
pubsub.publish('hi there!', 'TEST_TOPIC');
```