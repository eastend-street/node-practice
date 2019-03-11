class App
	{
	initialize(selfActor)
		{
		const dependsOn = ['OraActor','SynapticActor', 'ExpressActor']
		this.selfActor = selfActor;
		this.actors = []
		let os = require('os');
		for (var i = 0; i < dependsOn.length; i++)
			{
			this.RegisterActor(dependsOn[i]);
			}
		this.oraData = {}
		this.oraData.text = os.hostname();
		this.oraData.color = 'green'
		this.oraData.hideCursor = false;
		this.oraData.indent = 0;
		this.oraData.spinner = 'circleQuarters'
		this.oraData.txtLevel = 0;
		this.axelData = {}
		this.axelData.clear = true;


		const username = require('username');
		this.usr = username.sync();
		this.oraData.text = this.usr + '@' + this.oraData.text + ":"
		}


	RegisterActor(actorName)
		{
		return this.selfActor.createChild('/src/actors/' + actorName)
			.then(theActor => {
					  this.actors.push(theActor);
					  return theActor;
					  });
		}


	updateApplication()
		{
		for (var i = 0; i < this.actors.length; i++)
			{
			switch (this.actors[i].actor.name) 
				{
				case 'App': 
					break;
				case 'Object': 
					break;
  				case 'OraActor':
					this.actors[i].actor.send('update',this.oraData)
    					break;
  				case 'SynapticActor':
					break;
  				case 'AxelActor':
					this.actors[i].actor.send('update', this.axelData)
    					break;
				case 'ExpressActor':
					this.actors[i].actor.send('update','');
					break;
  				default:
					this.actors[i].actor.send('update', '');
					break;
				}
			}
		}
	}


module.exports = App
