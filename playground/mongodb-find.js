const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', async (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server.');
    }
    console.log(`Successfully connected to MongoDB server`);

    // db.collection('Todos').find({
    //     _id: new ObjectID('5ba9318bd45fba6cd4ed1048')
    // }).toArray().then((docs)=>{
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2))
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });

    // db.collection('Todos').find().count().then((count)=>{
    //     console.log(`Todos count: ${count}`);
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });

    // db.close();

    var users = await db.collection('Users').find({name: 'Grant'}).toArray();
    console.log('Users List:');
    console.log(JSON.stringify(users, undefined, 2));

    db.close();
});