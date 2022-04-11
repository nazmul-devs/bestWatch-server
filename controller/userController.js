const User = require("../schemas/userSchema");

exports.makeAdmin = async (req, res) => {
	const data = req.body;
	const newUser = new User(data);
	await newUser.save((err) => {
		err
			? res.status(500).json({ error: "There was a server side error" })
			: res
					.status(200)
					.json({ message: "Admin ware inserted seccussfully" });
	});
};

exports.findUsers = async (req, res) => {
	try {
		const user = await User.find();
		res.send(user);
	} catch (error) {
		res.status(500).json({ message: "Thare was a server error" });
	}
};

exports.deleteAdmin = async (req, res) => {
	try {
		const user = await User.findByIdAndDelete(req.params.id);
		res.json({ message: "user deleted" });
	} catch (error) {
		res.status(500).json({ message: "Thare was a server error" });
	}
};
