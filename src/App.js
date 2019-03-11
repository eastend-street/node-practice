class App
	{
	initialize(selfActor)
		{
		const dependsOn = ['OraActor','SynapticActor']
		this.selfActor = selfActor;
		this.actors = []
		for (var i = 0; i < dependsOn.length; i++)
			{
			this.actors.push(this.RegisterActor(dependsOn[i]));
			}
		console.log(this.actors)
		}

	RegisterActor(actorName)
		{
		console.log("RegisterActor: " + actorName)
		return this.selfActor.createChild('/src/actors/' + actorName)
			.then(theActor => {
					  return theActor;
					  });
		}
	}


module.exports = App
