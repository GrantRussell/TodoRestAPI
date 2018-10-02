const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', async (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server.');
    }
    console.log(`Successfully connected to MongoDB server`);

    // const result = await db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5bb26f8832898c44a8ab6962')
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // });

    const result = await db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5bb3bf0f70fc9c746865d66d')
    }, {
        $inc: {
            age : 1
        },
        $set: {
            name: "Grant"
        }
    }, {
        returnOriginal: false
    });

    console.log(result);
    //db.close(); 
});