const Order = require("../schemas/orderSchema.js");

exports.submitOrder = async (req, res) => {
	const order = req.body;
	const newOrder = new Order(order);
	await newOrder.save((err) => {
		err
			? res.status(500).json({ error: "There was a server side error" })
			: res
					.status(200)
					.json({ message: "Order ware submited seccussfully" });
	});
};

exports.findOrders = async (req, res) => {
	try {
		const orders = await Order.find();
		res.send(orders);
	} catch (error) {
		res.status(500).json({ message: "Thare was a server error" });
	}
};

exports.delete = async (req, res) => {
	try {
		const response = await Order.findByIdAndDelete(req.params.id);
		res.send({ message: "Order deleted successfully" });
	} catch (error) {
		res.status(500).json({ message: "Thare was a server error" });
	}
};
