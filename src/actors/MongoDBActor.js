

class MongoDBActor
	{
	initialize(selfActor)
		{
		this.self = selfActor;
		this.mongodb = require('mongodb').MongoClient;
		this.url = "mongodb://database:27017/" + this.name;

		this.mongodb.connect(this.url, function(err,db)
			{
			if (err) throw err;
			console.log("Database Actor created!");
			db.close();
			});
		}

	update(data)
		{
		this.mongodb.connect(this.url, function(err,db)
                        {
                        if (err) throw err;
                        console.log("Database Actor Updated!");
                        db.close();
                        });

		}

	}

module.exports = MongoDBActor
