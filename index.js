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
	}}

const core = new Core(config);
