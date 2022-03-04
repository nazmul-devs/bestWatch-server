const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const ObjectID = require("mongodb").ObjectId;

// Internal import
const watchSchema = require("../schemas/watchSchema.js");

// Model
const Watch = new mongoose.model("Watch", watchSchema);

router.get("/", async (req, res) => {
	const watch = await Watch.find();
	res.send(watch);
});

// find by id
router.get("/:id", async (req, res) => {
	const watch = await Watch.findOne({ _id: req.params.id });
	res.send(watch);
});
router.post("/", async (req, res) => {
	const data = req.body;
	const newWatch = new Watch(data);
	await newWatch.save((err) => {
		err
			? res.status(500).json({ error: "There was a server side error" })
			: res.status(200).json({ message: "Data ware inserted seccussfully" });
	});
});

// insert many
router.post("/all", async (req, res) => {
	await Watch.insertMany(req.body, (err) => {
		err
			? res.status(500).json({ error: "There was a server side error" })
			: res.status(200).json({ message: "All data inserted seccussfully" });
	});
});

// update watch data
router.put("/:id", async (req, res) => {
	const id = req.params.id;
	await Watch.updateOne(
		{ _id: req.params.id },
		{
			set: {
				name: "Update name",
			},
		},
		(err) => {
			err
				? res.status(500).json({ error: "There was a server side error" })
				: res.status(200).json({ message: "Data updated seccussfully" });
		}
	);
});

module.exports = router;
