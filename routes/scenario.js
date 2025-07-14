const express = require('express');
const router = express.Router();
const scenarioService = require("../services/scenario")
const authService = require("../services/auth")

// 전체 시나리오 조회
router.get('/', async (req, res) => {
	try{
		const auth = await authService.verify(req.headers.authorization)
		const scenarios = await scenarioService.getScenario()
		return res.status(200).send({scenarios: scenarios})
	}
	catch(e){
		console.log(e)
        return res.status(400).send({ message: e })
	}
});

module.exports = router;
