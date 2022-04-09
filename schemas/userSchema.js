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
	photoURL: String,
});

module.exports = mongoose.model("User", userSchema);
