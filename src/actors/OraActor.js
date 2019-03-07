

class OraActor
	{
	initialize(selfActor)
		{
		this.selfActor = selfActor;
		this.ora = require('ora');
		this.spinner = this.startOra('');
		this.selfActor.createChild('/src/actors/SynapticActor',this.spinner);
		}
	startOra(startMessage)
		{
		return this.ora(startMessage).start();
		}
	setText(toText)
		{
		this.spinner.text = toText;
		}
	stopOra(stopMessage)
		{
		this.spinner.Stop();
		}
	}


module.exports = OraActor
