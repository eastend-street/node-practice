class App
	{
	initialize(selfActor)
		{
		this.selfActor = selfActor;
		this.selfActor.createChild('/src/actors/OraActor')
      			.then(oraActor => {
				oraActor.send("startOra","");
				oraActor = oraActor;
				return oraActor;
      				});

		}
	}


module.exports = App
