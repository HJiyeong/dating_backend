require('dotenv').config();
const MongoClient = require("mongodb").MongoClient;
const { ObjectId } = require("mongodb");

const uri = process.env.MONGO_URI;
let cachedDb = null;
let cachedDbLocal = null;

async function connectToDatabase() {
    if (cachedDb) {
        return cachedDb;
    }
    const client = await MongoClient.connect(uri);
    const db = client.db('service');
    cachedDb = db;
    return db;
}

async function collection(collName) {
    const db = await connectToDatabase();
    return db.collection(collName)
}
module.exports = {collection}
// const test = async() => {
//     const coll = await collection('scene')
//     const item = await coll.findOne({_id: new ObjectId('6870f50455474db2a9afdb93')});
//     console.log(item.type)

// }
// test()