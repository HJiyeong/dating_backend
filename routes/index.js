const express = require('express');
const router = express.Router();
router.get("/", async(req, res) => {
	return res.status(200).send({message:'ai-o-siranai'})
})
router.use("/scenario", require("./scenario"))
router.use("/user", require("./user"))
router.use("/file", require("./file"))
module.exports = router;
