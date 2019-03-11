

class OraActor
	{
	initialize(selfActor)
		{
		this.selfActor = selfActor;
		this.ora = require('ora');
		this.spinner = this.startOra('');
		this.synapticActor = this.RegisterActor('SynapticActor');
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

	 RegisterActor(actorName)
                {
                console.log("RegisterActor: " + actorName)
                return this.selfActor.createChild('/src/actors/' + actorName)
                        .then(theActor => {
                                          return theActor;
                                          });
                }

	}


module.exports = OraActor
