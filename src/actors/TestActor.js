

class TestActor
	{
	initialize(selfActor)
		{
		this.self = selfActor;
		 return selfActor.createChild(MyChildActor)
      			.then(childActor => {
    				    	    // Save created child actor to instance field.
        			            this.childActor = childActor;
      					    });
		}
	update(data)
		{}
	}



module.exports = TestActor
