const mongoose = require("mongoose");
const orderSchema = mongoose.Schema({
	name: {
		type: String,
		require: true,
	},
	email: {
		type: String,
		require: true,
	},
	city: String,
	country: String,
	delivaryCharge: Number,
	orderedItems: Array,
});

module.exports = mongoose.model("Order", orderSchema);
