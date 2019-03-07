class App
	{
	initialize(selfActor)
		{
		this.selfActor = selfActor;
		this.selfActor.createChild('/src/actors/OraActor')
      			.then(oraActor => {
				oraActor.send("startOra","Welcome");
				this.oraActor = oraActor;
				return oraActor;
      				});
		this.oraActor.send("setText",":-->|");
		}
	}


module.exports = App
