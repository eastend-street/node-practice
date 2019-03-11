



class ExpressActor
	{
	initialize(selfActor)
		{
		this.self = selfActor;
		this.express = require('express');
		this.server = express();

		this.server.use(express.static('public'))
		this.startServer(3000)
		}
	startServer(port)
		{
		this.server.listen(port)
		}
	stopServer()
		{
		this.server.stop();
		}

	update(data)
		{
		console.log(data)
		}

	}



module.expores = ExpressActor
