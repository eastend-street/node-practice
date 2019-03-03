class App
	{
	ping(from)
		{
		console.log("Ping from: " + from);
		console.log(process.pid + " will reply");
		return process.pid;
		}
	boot(aParam)
		{
		}
	}


module.exports = App
