const express = require('express');
const router = express.Router();
const userService = require("../services/user")
const authService = require("../services/auth")
router.put('/create', async function (req, res) {
    const { kakao_id, name } = req.body;
	try{
		console.log(123)
		const userId = await userService.createUser(kakao_id, name)
		return res.status(200).send({user_id: userId})
	}
	catch(e){
		console.log(e)
		return res.status(400).send({ message: e })
	}
})
router.get('/exist', async function (req, res) {
    const { id } = req.query;
	try{
		const result = await userService.checkExist(id)
		return res.status(200).send(result)
	}
	catch(e){
		console.log(e)
		return res.status(400).send({ message: e })
	}
})
router.post('/login', async function (req, res) {
    const { user_id } = req.body;
	try{
		const result = await userService.getToken(user_id)
		if(result.status == 'success') return res.status(200).send(result)
		else{
			return res.status(403).send(result)
		}
	}
	catch(e){
		console.log(e)
		return res.status(400).send({ message: e })
	}
})
router.post('/score', async function (req, res) {
	try{
		const auth = await authService.verify(req.headers.authorization)
		const { next_scene_id, score_list } = req.body;
		const result = await userService.updateSave(auth.user_id, next_scene_id, score_list)
		if(result.status == 'success') return res.status(200).send({message:'success', next_scene_id})
		else{
			return res.status(403).send(result)
		}
	}
	catch(e){
		console.log(e)
		return res.status(400).send({ message: e })
	}
})
module.exports = router;