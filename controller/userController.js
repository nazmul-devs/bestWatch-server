const User = require("../schemas/userSchema");

exports.createUser = async (req, res) => {
	const data = req.body;
	const newUser = new User(data);
	await newUser.save((err) => {
		err
			? res.status(500).json({ error: "There was a server side error" })
			: res.status(200).json({ message: "User ware inserted seccussfully" });
	});
};

exports.findUser = async (req, res) => {
	try {
		const user = await User.find({ email: req.body.email });
		res.send(user);
	} catch (error) {
		res.status(500).json({ message: "Thare was a server error" });
	}
};

exports.findUsers = async (req, res) => {
	try {
		const user = await User.find();
		res.send(user);
	} catch (error) {
		res.status(500).json({ message: "Thare was a server error" });
	}
};

exports.deletUser = async (req, res) => {
	try {
		const user = await User.findById(req.params.id);
		await user.remove();
	} catch (error) {
		res.status(500).json({ message: "Thare was a server error" });
	}
};

exports.googleLogin = async (req, res) => {
	try {
		const user = await User.findById(req.body.email);
		Object.assign(watch, req.body);
		User.save();
		res.send(user);
	} catch (error) {
		res.status(500).json({ message: "Thare was a server error" });
	}
};
