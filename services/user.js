const {collection} = require('../services/db')
const authService = require('../services/auth');
const { ObjectId } = require("mongodb");
const getToken = async(google_id, gmail) => {
	const coll_user = await collection('user');
	const user = await coll_user.findOne({google_id: google_id, gmail: gmail})
	if(user.removed_at) return {message: 'withdraw', status: 'fail'}
	let user_id = ''
	if(!user){
		const doc = {
			google_id: google_id,
			gmail: gmail,
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