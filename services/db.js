const MongoClient = require("mongodb").MongoClient;
const { ObjectId } = require("mongodb");

let cachedDb = null;
let cachedDbLocal = null;

async function connectToDatabase() {
    if (cachedDb) {
        return cachedDb;
    }
    const client = await MongoClient.connect('mongodb+srv://jiyeong:bbeuny0105%40%40%21%21@cluster0.2ig35la.mongodb.net/datingDB?retryWrites=true&w=majority&appName=Cluster0');
    const db = client.db('service');
    cachedDb = db;
    return db;
}

async function collection(collName) {
    const db = await connectToDatabase();
    return db.collection(collName)
}

const test = async() => {
    const coll = await collection('scene')
    const item = await coll.findOne({_id: new ObjectId('6870f50455474db2a9afdb93')});
    console.log(item.type)

}
test()