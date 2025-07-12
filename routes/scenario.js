const express = require('express');
const router = express.Router();
const scenarioService = require("../services/scenario")

// 전체 시나리오 조회
router.get('/', async (req, res) => {
	console.log('testsuccess')
  try {
    const scenarios = await scenarioService.getScenario()
	return res.status(200).send({scenarios: scenarios})
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
