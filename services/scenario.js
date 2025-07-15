const { collection } = require('./db');
const { ObjectId } = require("mongodb");

const getScenario = async(id) => {
	const coll = await collection('scene')
	const coll_chapter = await collection('chapter')
	const scene = await coll.findOne({_id: new ObjectId(id), removed_at:null})
	const chapter = await coll_chapter.findOne({_id: new ObjectId(scene.chapter_id)})
	return {...scene, chapter_title: chapter.title, event_title: chapter.event.find(e => e.number == scene.event).title}
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