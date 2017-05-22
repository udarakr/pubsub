var pubsub;
(function () {
	'use strict';

	var topics = {};
	var val = 0;

	function subscribe(topic, callback, id){
		//validate the callback
		if (typeof callback === 'function'){
			// validate the topic and register, should not go through the prototype 
			if ( !topics.hasOwnProperty( topic ) ){
				topics[topic] = {};
			}
			topics[topic][id || val++] = callback;
		}
	}

	function publish(data, topic){
		if(!isSubscribersExists(topic)){
			return false;
		}

		//get the topics[topic]
		var subscribers = topics[topic];
		var subscriber, call;
		for (subscriber in subscribers){
			if (subscribers.hasOwnProperty(subscriber)){
				call = subscribers[subscriber];
				call(topic, data, subscriber);
			}
		}
	}

	//private
	function isSubscribersExists(topic){
		return topics.hasOwnProperty(topic) && hasKeys(topics[topic])
	}

	//private
	function hasKeys(obj){
		var key;
		for (key in obj){
			if (obj.hasOwnProperty(key)){
				return true;
			}
		}
		return false;
	}

	pubsub = {
		subscribe: subscribe,
		publish: publish
	};
})();
