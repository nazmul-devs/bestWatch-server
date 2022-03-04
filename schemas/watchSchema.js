const mongoose = require("mongoose");
const watchSchema = mongoose.Schema({
	name: {
		type: String,
		require: true,
	},
});

module.exports = watchSchema;
