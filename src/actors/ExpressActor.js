// Express actor wraps around express and lets us manage it in an actor type fashion. 
// See: https://www.npmjs.com/package/express
class ExpressActor
	{
	initialize(selfActor)
		{
		this.self = selfActor;
		this.express = require('express');
		this.server = this.express();
		this.port = 3000;
	
		this.setupExpressRoutes();
		this.startServer(this.port);
		}

	returnData()
		{
		return {
			port: this.port
			}
		}

	setupExpressRoutes()
		{
		this.server.use(this.express.static('public'))
		}

	startServer(port)
		{
		this.server.listen(this.port, function ()
                                        {
                                        console.log("Example app listening at http://yourdomain:" + this.port)
                                        })

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



module.exports = ExpressActor
