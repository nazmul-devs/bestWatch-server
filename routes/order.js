const express = require("express");
const router = express.Router();

// Internal import
const orderController = require("../controller/orderController.js");

router.get("/all", orderController.findOrders);
router.get("/", orderController.findOrder);
router.delete("/", orderController.delete);

module.exports = router;
