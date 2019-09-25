// Express actor wraps around express and lets us manage it in an actor type fashion. 
// See: https://www.npmjs.com/package/express
class ExpressActor
	{
	initialize(selfActor)
		{
		this.self = selfActor;
		this.express = require('express');
		this.server = this.express();
		this.port = 6000;
		this.setupExpressRoutes();
		this.startServer(this.port);
		this.os = require('os');
		}

	returnData()
		{
		return  {
			port: this.port
			}
		}

	setupExpressRoutes()
		{
		this.server.use(this.express.static('public'))

		this.server.get('/api', function (req, res) {
 				 res.send("API Version 0")})
	}

	startServer(port)
		{
		this.server.listen(port, function ()
                                        {
                                        console.log("Server is Listening")
                                        })

		}
	stopServer()
		{
		this.server.stop();
		}

	update(data)
		{
//		console.log(this.server)
		}

	}



module.exports = ExpressActor
