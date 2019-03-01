
const ActorSystem = require('comedy');
const config = require('./config');

// We jump straight to a Main() function entrypoint
return Main();


function Main()
	{
	console.clear();
	ActorSystem()
		.rootActor()
		.then(rootActor => {
				   console.log("Loading Application Actor: " + config.ApplicationActor)
				   return rootActor.createChild(config.ApplicationActor);
				   })
		.then(applicationActor => {
					  applicationActor.send("boot",applicationActor);
					 
					  }
		)
	}
