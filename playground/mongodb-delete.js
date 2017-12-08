const {MongoClient, ObjectID} = require('mongodb');

 MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if (err) {
 		return console.log('Unable to connect to MongoDb server');
 	}
 	console.log('Successfully connected to MongoDb server');

    db.collection('Users').deleteMany({name: 'Karl'}).then((result) => {
        console.log(result);
    });

    db.collection('Users').findOneAndDelete({_id: new ObjectID('5a2ae57998eb83416237c331')}).then((result) => {
        console.log(result);
    });

 	// db.close();
});
