const { collection } = require('./db');
const { ObjectId } = require("mongodb");
const fileService = require('./file')

const getCharacterList = async() => {
	const coll = await collection('character')
	const list = await coll.find({removed_at: null}).toArray()
	// for(const data of list){
	// 	try{
	// 		if(data.head_image_id){
	// 			data.head_image_id = await fileService.getSignedURLImg(data.head_image_id)
	// 		}
	// 		if(data.main_image_id){
	// 			data.main_image_id = await fileService.getSignedURLImg(data.main_image_id)
	// 		}
	// 	}
	// 	catch(e){
	// 		console.log(e)
	// 	}
	// }
	return list
}
module.exports = {
	getCharacterList
}