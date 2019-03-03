'use strict';
const ActorSystem = require('comedy');
const config = require('./cfg/config');
const AppConfig = require(config.ApplicationActorConfig);

var Promise = require('bluebird');


class Core
	{
	constructor(config)
		{
		this.config = config;
		console.clear();
		ActorSystem({
  							loggerConfiguration: ['./logger.json',config.ApplicationActorLoggerConfig]
		    	    	})
								.rootActor()
								.then(rootActor =>
									{
					   		  console.log("Loading Application Actor: " + config.ApplicationActor,AppConfig)
					   	 	  return rootActor.createChild(config.ApplicationActor, AppConfig);
								})
									.then(applicationActor =>
										{
						  			applicationActor.send("boot",applicationActor);
 						  			Promise.map([1, 2, 3], () => applicationActor.sendAndReceive('ping', process.pid))
										.then(reply =>
												{
      									// Output result. There should be replies from each actor in a cluster.
      									console.log(`Actor replied: ${reply}`);
												return reply;
						  					})
										})
	}}

const core = new Core(config);
