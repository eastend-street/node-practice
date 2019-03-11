
class SynapticActor
	{
	initialise(selfActor, spinner)
		{
		this.self = selfActor;
		spinner.text = "hi";
		this.synaptic = require('synaptic'); // this line is not needed in the browser
		this.awaken();
		}

	awaken()
		{
		this.Neuron = this.synaptic.Neuron,
		this.Layer = this.synaptic.Layer,
		this.Network = this.synaptic.Network,
		this.Trainer = this.synaptic.Trainer,
		this.Architect = this.synaptic.Architect;

		this.SelfPerception = new Perception(2,3,1); 
		this.trainNetwork()
		}
	trainNetwork()
		{
		this.Trainer = new Trainer(this.SelfPerception);
		this.Trainer.XOR();
		}

	update()
		{
		console.log('syn update');
		}
	}


module.exports = SynapticActor
