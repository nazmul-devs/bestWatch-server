const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const wachRoute = require("./routes/watch.js");
const PORT = process.env.PORT || 5000;

// Express app initialize
const app = express();
app.use(cors());
app.use(express.json());

app.use("/watch", wachRoute);

mongoose
	.connect(process.env.CONNECED_URL)
	.then(() =>
		app.listen(PORT, () => console.log("Best watch server on running"))
	)
	.catch((err) => console.log(err.message));
