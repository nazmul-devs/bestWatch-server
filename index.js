//External imports
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const PORT = process.env.PORT || 5000;

// Internal imports
const wachRoute = require("./routes/watch.js");

const app = express();
app.use(express.json());
app.use(cors());

mongoose
	.connect(`${process.env.CONNECED_URL}`)
	.then(() => {
		// Routes
		app.use("/watch", wachRoute);
		app.listen(PORT, () => console.log("Best watch server on running"));
	})
	.catch((err) => console.log(err.message));
