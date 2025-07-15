const express = require('express');
const router = express.Router();
const characterService = require("../services/character")
const authService = require("../services/auth")
// 전체 시나리오 조회
router.get('/list', async (req, res) => {
	try{
		const auth = await authService.verify(req.headers.authorization)
		const characterList = await characterService.getCharacterList(id)
		return res.status(200).send({character_list: characterList})
	}
	catch(e){
		console.log(e)
        return res.status(400).send({ message: e })
	}
});

module.exports = router;