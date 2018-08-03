const ObjectId = require('mongodb').ObjectId;
const DB_COLLECTION_NAME = 'transaction';

function addTransaction(transaction) {
    return connectToMongo()
        .then(db => {
            const collection = db.collection(DB_COLLECTION_NAME);
            return collection.insertOne(transaction)
                .then(result => {
                    transaction._id = result.insertedId;
                    return transaction;
                })
        })
}

function getOwnerTransactions(ownerId) {
    const criteria = {}
    criteria.ownerId = new ObjectId(ownerId)
    return connectToMongo().then(db => {
        return db.collection(DB_COLLECTION_NAME)
            .aggregate([
                {
                    $match: criteria
                },
                {
                    $lookup:
                        {
                            from: 'item',
                            localField: 'itemId',
                            foreignField: '_id',
                            as: 'item'
                        }
                },
                {
                    $unwind: '$item'
                },
                {
                    $lookup:
                        {
                            from: 'user',
                            localField: 'ownerId',
                            foreignField: '_id',
                            as: 'user'
                        }
                },
                {
                    $unwind: '$user'
                }
            ]).toArray()
    })
}


module.exports = {
    addTransaction,
    getOwnerTransactions
}

function connectToMongo() {
    const MongoClient = require('mongodb').MongoClient;
    const url = 'mongodb://sts:sts123@ds145881.mlab.com:45881/rentapp';
    return MongoClient.connect(url)
        .then(client => client.db())
}

