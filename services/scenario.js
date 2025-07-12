const { collection } = require('./db');
const { ObjectId } = require("mongodb");

const getScenario = async(user_id) => {
	const coll = await collection('scene')
	const scenario = await coll.find({removed_at:null}).toArray()
	// console.log(scenario)
	// const scenario = await coll.find({user_id: user_id, removed_at:null}).toArray()
	scenario.sort((a,b) => {
		if(a.chapter > b.chapter) return 1
		else{
			if(a.event > b.event) return 1
			return -1
		}
	})
	return scenario
}
module.exports = {
	getScenario
}