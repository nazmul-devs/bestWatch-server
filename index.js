//External imports
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT || 5000;

// Internal imports
const wachRoute = require("./routes/watch.js");
const userRoute = require("./routes/user.js");
const orderRoute = require("./routes/order.js");

const app = express();
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use(
	cors({
		origin: "*",
	})
);
app.use(express.json());

mongoose
	.connect(
		"mongodb+srv://best-watch:best-watch668@cluster0.f4mgp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
	)
	.then(() => {
		// testing
		app.get("/", (req, res) => {
			res.send("Best watch server is running");
		});
		// Routes
		app.use("/watch", wachRoute);
		app.use("/user", userRoute);
		app.use("/order", orderRoute);
		app.listen(port, () => console.log("Best watch server on running"));
	})
	.catch((err) => console.log(err.message));
