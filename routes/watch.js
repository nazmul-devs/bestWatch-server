const express = require("express");
const router = express.Router();

// Internal import
const watchController = require("../controller/watchController.js");

router.get("/", watchController.findWatchs);
router.get("/:id", watchController.findWatch);
router.post("/", watchController.createWatch);
router.post("/all", watchController.createWatchs);
router.patch("/:id", watchController.updateWatch);
router.delete("/:id", watchController.deleteWatch);

module.exports = router;
