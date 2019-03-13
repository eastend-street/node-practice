



class ExpressActor
	{
	initialize(selfActor)
		{
		this.self = selfActor;
		let express = require('express');
		this.server = express();

		this.server.use(express.static('public'))
		this.server.listen(3000, function () 
					{
					console.log("Example app listening at http://%s:%s")
					})

		}
	startServer(port)
		{
		console.log('test')
		this.server.listen(port)
		}
	stopServer()
		{
		this.server.stop();
		}

	update(data)
		{
		//console.log(data)
		}

	}



module.exports = ExpressActor
