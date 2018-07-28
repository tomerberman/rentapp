const ObjectId = require('mongodb').ObjectId;
const DB_COLLECTION_NAME = 'user';


function query() {
    return connectToMongo()
        .then(db => {
            const collection = db.collection(DB_COLLECTION_NAME);
            let users = collection.find({}).toArray()
            return users;
        })
}

function addUser(user) {
    return connectToMongo()
        .then(db => {
            const collection = db.collection(DB_COLLECTION_NAME);
            return collection.insertOne(user)
                .then(result => {
                    user._id = result.insertedId;
                    return user;
                })
        })
}

function checkLogin(creds) {    
    return connectToMongo()
        .then(db => {
            const collection = db.collection(DB_COLLECTION_NAME);
            return collection.findOne({ name: creds.name })
        })
}

function getUserById(userId) {
    userId = new ObjectId(userId)
    return connectToMongo()
        .then(db => {
            const collection = db.collection(DB_COLLECTION_NAME)
            return collection.findOne({ _id: userId })
        })
}

module.exports = {
    query,
    getUserById,
    checkLogin,
    addUser
}

function connectToMongo() {
    const MongoClient = require('mongodb').MongoClient;
    const url = 'mongodb://sts:sts123@ds145881.mlab.com:45881/rentapp';
    return MongoClient.connect(url)
        .then(client => client.db())
}