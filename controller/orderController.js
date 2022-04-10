const Order = require("../schemas/orderSchema.js");

exports.submitOrder = async (req, res) => {
	try {
		const order = req.body;
		const newOrder = new Order(order);
		await newOrder.save();
	} catch (error) {
		res.status(500).json({ message: "Thare was a server error" });
	}
};

exports.findOrders = async (req, res) => {
	try {
		const orders = await User.find();
		res.send(orders);
	} catch (error) {
		res.status(500).json({ message: "Thare was a server error" });
	}
};
exports.findOrder = async (req, res) => {
	try {
		const order = await User.find({ email: req.body.email });
		res.send(order);
	} catch (error) {
		res.status(500).json({ message: "Thare was a server error" });
	}
};

exports.delete = async (req, res) => {
	try {
		const order = Order.find({ email: req.body.email });
		order.remove();
	} catch (error) {
		res.status(500).json({ message: "Thare was a server error" });
	}
};
