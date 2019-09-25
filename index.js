'use strict';


class Core
	{
	constructor()
		{
		this.ActorSystem = require('comedy');
		this.config = require('./cfg/config');
		this.AppConfig = require(this.config.ApplicationActorConfig);
		this.Promise = require('bluebird');

		this.ActorSystem
			(
				{
  				loggerConfiguration: ['./logger.json',this.config.ApplicationActorLoggerConfig]
		    		}
			)
			.rootActor()
			.then(rootActor =>
					{
					console.log("Loading Application Actor: " + this.config.ApplicationActor,this.AppConfig)
					this.rootActor = rootActor;
					return rootActor.createChild(this.config.ApplicationActor, this.AppConfig);
					})
			.then(appActor =>
					{
					this.appActor = appActor;
					console.log("Loaded Application Actor: " + this.appActor)
					this.startMainLoop(this.appActor);
					})
		}
	startMainLoop(appActor)
		{
		setInterval(this.doUpdate, this.config.ApplicationActorUpdateInterval, appActor);
		}

	doUpdate(appActor)
		{
		appActor.send('updateApplication');
		}
	}


const core = new Core();
