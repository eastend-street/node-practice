class App
	{
	initialize(selfActor)
		{
		this.selfActor = selfActor;
		this.oraActor = this.selfActor.createChild('/src/actors/OraActor')
      			.then(oraActor => {
				console.log("ora made");
				oraActor.send("testOra","testMsg");
				return oraActor;
      				});
		}
	}


module.exports = App
