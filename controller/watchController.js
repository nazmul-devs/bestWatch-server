// internal import
const Watch = require("../schemas/watchSchema");

exports.createWatch = async (req, res) => {
	const data = req.body;
	const newWatch = new Watch(data);
	await newWatch.save((err) => {
		err
			? res.status(500).json({ error: "There was a server side error" })
			: res.status(200).json({ message: "Data ware inserted seccussfully" });
	});
};

exports.createWatchs = async (req, res) => {
	await Watch.insertMany(req.body, (err) => {
		err
			? res.status(500).json({ error: "There was a server side error" })
			: res.status(200).json({ message: "All data inserted seccussfully" });
	});
};

exports.findWatchs = async (req, res) => {
	const watch = await Watch.find();
	res.send(watch);
};

exports.findWatch = async (req, res) => {
	const watch = await Watch.findById(req.params.id);
	res.send(watch);
};

exports.updateWatch = async (req, res) => {
	try {
		const watch = await Watch.findById(req.params.id);
		Object.assign(watch, req.body);
		watch.save();
		res.send(watch);
	} catch (error) {
		res.status(500).json({ message: "Thare was a server error" });
	}
};

exports.deleteWatch = async (req, res) => {
	try {
		const watch = await Watch.findById(req.params.id);
		await watch.remove();
		res.status(200).json({ message: "Watch was deleted" });
	} catch (error) {
		res.status(500).json({ message: "Thare was a server error" });
	}
};
