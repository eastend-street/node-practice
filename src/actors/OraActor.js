

class OraActor
	{
	initialize(selfActor)
		{
		console.clear();
		this.selfActor = selfActor;
		this.ora = require('ora');
		this.spinner = this.startOra('');
		}
	startOra(startMessage)
		{
		return this.ora(startMessage).start();
		}
	setText(toText)
		{
		this.ora.text = toText;
		}
	stopOra(stopMessage)
		{

		}
	}


module.exports = OraActor
