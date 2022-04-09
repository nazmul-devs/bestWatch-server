const mongoose = require("mongoose");
const watchSchema = mongoose.Schema({
	title: {
		type: String,
		require: true,
	},
	img: String,
	description: String,
	price: Number,
	rating: Number,
	brand: String,
	features: String,
	gender: String,
});

module.exports = mongoose.model("Watch", watchSchema);
