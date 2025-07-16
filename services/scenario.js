const { collection } = require('./db');
const { ObjectId } = require("mongodb");
const fileService = require('./file')
const getScenario = async(id) => {
	const coll = await collection('scene')
	const coll_chapter = await collection('chapter')
	const scene = await coll.findOne({_id: new ObjectId(id), removed_at:null})
	const chapter = await coll_chapter.findOne({_id: new ObjectId(scene.chapter_id)})
	for(const data of scene.scenario){
		try{
			// if(data.background_image_id){
			// 	data.background_image_id = await fileService.getSignedURLImg(data.background_image_id)
			// }
			// if(data.character_image_id){
			// 	data.character_image_id = await fileService.getSignedURLImg(data.character_image_id)
			// } 
			if(data.background_sound_id){
				data.background_sound_id = await fileService.getSignedUrlAudio(data.background_sound_id)
			} 
			// if(data.character_action_image_id){
			// 	data.character_action_image_id = await fileService.getSignedURLImg(data.character_action_image_id)
			// } 
			// if(data.second_character_image_id){
			// 	data.second_character_image_id = await fileService.getSignedURLImg(data.second_character_image_id)
			// } 
			// if(data.character_re_image_id){
			// 	data.character_re_image_id = await fileService.getSignedURLImg(data.character_re_image_id)
			// } 
		}
		catch(e){
			console.log(e)
		}
	}
	return {...scene, chapter_title: chapter.title, chapter_number: chapter.number, event_title: chapter.event.find(e => e.number == scene.event).title}
}
const getCurrentSaveScenario = async(user_id) => {
	const coll_user = await collection('user')
	const user = await coll_user.findOne({_id: new ObjectId(user_id)})
	if(user){
		const sceneId = user.save_slot.find(e => e.is_current).scene_id
		const scene = await getScenario(sceneId)
		return scene
	}
	return {}
}
module.exports = {
	getScenario, getCurrentSaveScenario
}