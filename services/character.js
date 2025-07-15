const { collection } = require('./db');
const { ObjectId } = require("mongodb");

const getCharacterList = async() => {
	const coll = await collection('character')
	const list = await coll.find({removed_at: null}).toArray()
	return list
}
module.exports = {
	getCharacterList
}