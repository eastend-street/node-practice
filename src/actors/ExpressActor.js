// Express actor wraps around express and lets us manage it in an actor type fashion.
// See: https://www.npmjs.com/package/express
class ExpressActor {
  initialize(selfActor) {
    this.self = selfActor;
    this.express = require("express");
    this.server = this.express();
    this.port = 3000;
    this.setupExpressRoutes();
    this.startServer(this.port);
    this.os = require("os");
  }

  returnData() {
    return {
      port: this.port
    };
  }

  setupExpressRoutes() {
    this.server.use(this.express.static("public"));
    this.server.get("/api/*", function(req, res) {
      console.log(
        "Recieved 'Get' request for resource: " +
          req.url +
          " from HOST: " +
          req.get("host")
      );
      res.send("{hello:world}");
	});
	this.server.get("/users", function(req, res) {
		console.log(
		  "Recieved 'Get' request for resource: " +
			req.url +
			" from HOST: " +
			req.get("host")
		);
		res.send("Hello User");
	  });
  }

  startServer(port) {
    this.server.listen(port, function() {
      console.log("Server is Listening");
    });
  }
  stopServer() {
    this.server.stop();
  }

  update(data) {
    //		console.log(this.server)
  }
}

module.exports = ExpressActor;
