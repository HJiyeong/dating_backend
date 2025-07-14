const express = require('express');
const router = express.Router();
const fileService = require("../services/file")
const authService = require("../services/auth")
router.get('/image', async (req, res) => {
	try{
		const auth = await authService.verify(req.headers.authorization)
		const {key} = req.query
		const url = await fileService.getSignedURLImg(key)
		return res.status(200).send({url: url})
	}
	catch(e){
		console.log(e)
        return res.status(400).send({ message: e })
	}
});
router.get('/audio', async (req, res) => {
	try{
		const auth = await authService.verify(req.headers.authorization)
		const {key} = req.query
		const url = await fileService.getSignedUrlAudio(key)
		return res.status(200).send({url: url})
	}
	catch(e){
		console.log(e)
        return res.status(400).send({ message: e })
	}
});
module.exports = router;