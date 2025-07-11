const mongoose = require('mongoose');

const scenarioSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  type: { type: String, required: true },
  sound: { type: String },
  image: { type: String },
  char: { type: String }
});

module.exports = mongoose.model('Scenario', scenarioSchema);
