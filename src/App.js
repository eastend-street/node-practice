class App
	{
	initialize(selfActor)
		{
		const dependsOn = ['ExpressActor','OraActor','AxelActor','SynapticActor','MongoDBActor']
		this.selfActor = selfActor;
		this.actors = []
		let os = require('os');
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


		for (var i = 0; i < dependsOn.length; i++)
                        {
                        this.RegisterActor(dependsOn[i]);
                        }


		}


	RegisterActor(actorName)
		{
		this.selfActor.createChild('/src/actors/' + actorName)
			.then(theActor => {
					  this.actors.push(theActor);
					  return theActor;
					  });
		}



	updateApplication()
		{
		for (var i = 0; i < this.actors.length; i++)
			{
			console.log(this.actors[i].actor.name + " - " + this.actors[i].actor.id)
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
					this.actors[i].actor.send('update',' ');
					break;
				case 'MongoDBActor':
					this.actors[i].actor.send('update',' ');
					break;
  				default:
					this.actors[i].actor.send('update', ' ');
					break;
				}
			}
		}
	}


module.exports = App
