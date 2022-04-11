const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
	displayName: {
		type: String,
		require: true,
	},
	email: {
		type: String,
		require: true,
	},
	role: {
		type: String,
		require: true,
	},
});

module.exports = mongoose.model("User", userSchema);
