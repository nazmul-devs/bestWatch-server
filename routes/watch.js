const express = require("express");
const router = express.Router();

// Internal import
const Watch = require("../models/watchSchema.js");

router.get("/", async (req, res) => {
	const watch = await Watch.find();
	res.send(watch);
});

// find by id
router.get("/:id", async (req, res) => {
	const watch = await Watch.findById(req.params.id);
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
router.patch("/:id", async (req, res) => {
	try {
		const watch = await Watch.findById(req.params.id);
		Object.assign(watch, req.body);
		watch.save();
		res.send(watch);
	} catch (error) {
		res.status(500).json({ message: "Thare was a server error" });
	}
});

// delete by id
router.delete("/:id", async (req, res) => {
	await Watch.deleteOne({ _id: req.params.id }, (err) => {
		err
			? res.status(500).json({ error: "There was a server side error" })
			: res.status(200).json({ message: "Data delete seccussfully" });
	});
});

module.exports = router;
