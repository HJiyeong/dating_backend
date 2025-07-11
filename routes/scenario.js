const express = require('express');
const router = express.Router();
const Scenario = require('../models/Scenario');

// 시나리오 추가
router.post('/', async (req, res) => {
  try {
    const newScenario = new Scenario(req.body);
    const saved = await newScenario.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// 전체 시나리오 조회
router.get('/', async (req, res) => {
  try {
    const scenarios = await Scenario.find();
    res.json(scenarios);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
