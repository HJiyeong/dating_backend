const express = require('express');
const router = express.Router();
const scenarioService = require("../services/scenario")
const authService = require("../services/auth")
// 전체 시나리오 조회
router.get('/:id', async (req, res) => {
	try{
		const auth = await authService.verify(req.headers.authorization)
		const {id} = req.params
		const scene = await scenarioService.getScenario(id)
		return res.status(200).send({scene: scene})
	}
	catch(e){
		console.log(e)
        return res.status(400).send({ message: e })
	}
});
router.get('/current', async (req, res) => {
	try{
		const auth = await authService.verify(req.headers.authorization)
		const scene = await scenarioService.getCurrentSaveScenario(auth.user_id)
		return res.status(200).send({scene: scene})
	}
	catch(e){
		console.log(e)
        return res.status(400).send({ message: e })
	}
});

module.exports = router;
