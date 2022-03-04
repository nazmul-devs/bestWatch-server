const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

// Internal import
const watchSchema = require("../schemas/watchSchema.js");

// Model
const Watch = new mongoose.model("Watch", watchSchema);

router.get("/", (req, res) => {
	res.send("This is get message");
});
router.post("/", async (req, res) => {
	const data = req.body;
	const newWatch = new Watch(data);
	await newWatch.save((err) => {
		err
			? res.status(500).json({ error: "There was a server side error" })
			: res.status(200).json({ message: "Data was inserted seccussfully" });
	});
});

module.exports = router;
