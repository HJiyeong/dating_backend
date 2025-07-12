const {collection} = require('../services/db')
const authService = require('../services/auth');
const { ObjectId } = require("mongodb");
const getToken = async(kakao_id) => {
	const coll_user = await collection('user');
	const user = await coll_user.findOne({kakao_id: kakao_id})
	if(user.removed_at) return {message: 'withdraw', status: 'fail'}
	let user_id = ''
	if(!user){
		const doc = {
			kakao_id: kakao_id,
			created_at: new Date(),
			updated_at: new Date(),
			removed_at: new Date()
		}
		const {insertedId} = await coll_user.insertOne(doc)
		user_id = insertedId.toString()
	}
	else user_id = user._id.toString()
	const token = await authService.sign(user_id)
	if(token.status == 'error') return {status:'fail', message:'not_token'}
	return {status: 'success', token}
}

module.exports = {
	getToken
}