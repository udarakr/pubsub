## simple pubsub javascript library

### Usage

1. Include the file pubsub.js.
2. Create a subscribtion using,

```pubsub.subscribe( 'TEST_TOPIC', function(topic, data){
    console.log( topic, data );
});```

3. Publish using,

```pubsub.publish('hi there!', 'TEST_TOPIC'); ```