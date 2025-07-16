const {collection} = require('../services/db')
const authService = require('./auth');
const { ObjectId } = require("mongodb");
const { generateId } = require('../utils/generateId');
const {characterId} = require('../utils/scenarioList')
const getToken = async(user_id) => {
	const coll_user = await collection('user');
	const user = await coll_user.findOne({_id: new ObjectId(user_id), removed_at: null})
	if(!user) return {status:'fail', message:'not_user'}
	const token = await authService.sign(user._id.toString(), user.name)
	if(token.status == 'error') return {status:'fail', message:'not_token'}
	return {status: 'success', token, is_first_scene: user.save_slot.find(e => e.is_current).scene_id == '687691b202396a82e88e131e'}
}
const createUser = async(kakao_id, name) => {
	const coll_user = await collection('user')
	const user = await coll_user.findOne({kakao_id: kakao_id})
	let user_id = ''
	if(user){
		await coll_user.updateOne({kakao_id: kakao_id}, {$set: {name: name,updated_at: new Date(), save_slot:[{
			id: generateId(),
			scene_id: "687691b202396a82e88e131e",
			is_current:true,
			love_scores:[
				{id: generateId(), character_id:characterId.seoyeon, score:0},
				{id: generateId(), character_id:characterId.harin, score:0}
			]
		}]}})
		user_id = user._id.toString()
	}
	else{
		const doc = {
			kakao_id: kakao_id,
			name: name,
			save_slot:[{
				id: generateId(),
				scene_id: "687691b202396a82e88e131e",
				is_current:true,
				love_scores:[
					{id: generateId(), character_id:characterId.seoyeon, score:0},
					{id: generateId(), character_id:characterId.harin, score:0}
				]
			}],
			created_at: new Date(),
			updated_at: new Date(),
			removed_at: null
		}
		const {insertedId} = await coll_user.insertOne(doc)
		user_id = insertedId.toString()
	}
	return user_id
}
const checkExist = async(kakao_id) => {
	const coll_user = await collection('user')
	const user = await coll_user.findOne({kakao_id: kakao_id, removed_at: null})
	if(user) return {user_id: user._id.toString(), kakao_id: kakao_id, is_exist:true}
	return {user_id: '', kakao_id: kakao_id, is_exist:false}
}
const updateSave = async(user_id, next_scene_id, score_list) => {
	const coll_user = await collection('user')
	const user = await coll_user.findOne({_id: new ObjectId(user_id)})
	if(user){
		user.save_slot.map(data => {
			if(data.is_current){
				data.scene_id = next_scene_id
				data.love_scores.map(data2 => {
					if(score_list.some(e => e.character_id == data2.character_id)){
						data2.score = Number(data2.score || 0) + Number(score_list.find(e => e.character_id == data2.character_id).score || 0)
					}
				})
			}
		})
		await coll_user.updateOne({_id: new ObjectId(user_id)}, {$set: {save_slot: user.save_slot}})
		return {status:'success'}
	}
	return {status:'fail'}
}

module.exports = {
	getToken, checkExist, createUser, updateSave
}