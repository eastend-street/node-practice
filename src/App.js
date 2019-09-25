class App
	{
	initialize(selfActor)
		{
		// I like to keep a reference to 'myself' here. 
		this.selfActor = selfActor;

		// I specify what actors I want to load here, this array will be parsed later and loaded
		// automaticly later, its easier to load the actors this way and more reliable to do it 
		// programitcly than to write the boiler plate each time. 
		const dependsOn = ['ExpressActor','OraActor']

		// I make an empty array here, loaded actors will be pushed in here so I have a reference
		// to them.
		this.actors = []

		// this will give me access to various OS functions
		const os = require('os');

		// I use this to deterime username
		const username = require('username');


		// I set some ORA data, ora provides some nice effects on the console is all. 
		this.oraData = {}
		this.oraData.text = os.hostname();
		this.oraData.color = 'green'
		this.oraData.hideCursor = false;
		this.oraData.indent = 0;
		this.oraData.spinner = 'circleQuarters'
		this.oraData.txtLevel = 0;

		// Axel allows me to control graphics to the console
		//		this.axelData = {}
		//		this.axelData.clear = true;

		// I sync some handy variables I wanna keep for later
		this.usr = username.sync();

		// and I format the message that ora will print.
		this.oraData.text = this.usr + '@' + this.oraData.text + ":"

		// now I'm done here, I'm gonna call the method 'RegisterActor' which I made that takes care of
		// of loading the actor modules correctly
		for (var i = 0; i < dependsOn.length; i++)
                        {
                        this.RegisterActor(dependsOn[i]);
                        }


		}


	// Responsible for loading an actor by the name of actorName
	RegisterActor(actorName)
		{
		// using the reference to myself earlier (the actor) I use that to create 'child' actors under me
		// the actor can be found in '/src/actors/' directory, if it is not there it wont be found
		this.selfActor.createChild('/src/actors/' + actorName)
			.then(theActor => {
					  // when the actor is loaded, I push the reference to the array to make it
 					  // easy to find later
					  this.actors.push(theActor);
					  return theActor;
					  });
		}
	


	// On a regular basis, this function is called and just updates some stuff to the console for our information
	// but also allows each actor an oppertunity to do something
	updateApplication()
		{
		for (var i = 0; i < this.actors.length; i++)
			{
//			console.log(this.actors[i].actor.name + " - " + this.actors[i].actor.id)
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
//					this.actors[i].actor.sendAndReceive("returnData")
//                                                .then(withResult => this.oraData.text = withResult)
    					break;
				case 'ExpressActor':
					this.actors[i].actor.send('update',' ');
//					this.actors[i].actor.sendAndReceive("returnData")
//						.then(withResult => this.oraData.text = withResult)
						
//					this.oraData.text = this.actors[i].actor.returnSetup();
					break;
				case 'MongoDBActor':
					this.actors[i].actor.send('update',' ');
					break;
  				default:
//					console.log("Default Handler for " + this.actors[i].actor.name)
					this.actors[i].actor.send('update', ' ');
					break;
				}
			}
		}
	}


module.exports = App
