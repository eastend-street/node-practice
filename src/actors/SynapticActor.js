
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
		}
	}


module.exports = SynapticActor
