

class CasandraDBActor
	{
	initialize(selfActor)
		{
		this.self = selfActor;
		this.cassandra = require('cassandra-driver');
		this.async = require('async');
		this.endpoint = {contactPoints: ['127.0.0.1'], keyspace: 'demo'}
		this.client = new this.cassandra.Client(this.endpoint);
		
		}

	update(data)
		{

		}

	}

module.exports = CasandraDBActor
