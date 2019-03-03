

class OraActor
	{
	initialize(selfActor)
		{
		this.selfActor = selfActor;
		this.ora = require('ora');
		this.spinner = this.startOra('Starting');
		}
	testOra()
		{
		}
	startOra(startMessage)
		{
		return this.ora(startMessage).start();
		}
	}


module.exports = OraActor
