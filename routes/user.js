const express = require('express');
const router = express.Router();
const userService = require("../services/user")

router.post('/login', async function (req, res) {
    const { google_id, gmail } = req.body;
	try{
		const result = await userService.getToken(google_id, gmail)
		if(result.status == 'success') return res.status(200).send({token: result.token})
		else{
			return res.status(403).send({message: 'withdraw'})
		}
	}
	catch(e){
		console.log(e)
		return res.status(400).send({ message: e })
	}
})
module.exports = router;