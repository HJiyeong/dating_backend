const {collection} = require('../services/db')
const authService = require('./auth');
const { ObjectId } = require("mongodb");
const { generateId } = require('../utils/generateId');
const {characterId} = require('../utils/scenarioList')
const getToken = async(user_id) => {
	const coll_user = await collection('user');
	const user = await coll_user.findOne({_id: new ObjectId(user_id), removed_at: null})
	if(!user) return {status:'fail', message:'not_user'}
	const token = await authService.sign(user._id.toString())
	if(token.status == 'error') return {status:'fail', message:'not_token'}
	return {status: 'success', token}
}
const createUser = async(kakao_id, name) => {
	const coll_user = await collection('user')
	const doc = {
		kakao_id: kakao_id,
		name: name,
		save_slot:[{
			id: generateId(),
			scene_id: "6876061f031feeef49e3f925",
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
	return insertedId.toString()
}
const checkExist = async(kakao_id) => {
	const coll_user = await collection('user')
	const user = await coll_user.findOne({kakao_id: kakao_id, removed_at: null})
	if(user) return {user_id: user._id.toString(), kakao_id: kakao_id, is_exist:true}
	return {user_id: '', kakao_id: kakao_id, is_exist:false}
}

module.exports = {
	getToken, checkExist, createUser
}