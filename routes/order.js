const express = require("express");
const router = express.Router();

// Internal import
const orderController = require("../controller/orderController.js");

router.get("/", orderController.findOrders);
router.post("/", orderController.submitOrder);
router.delete("/:id", orderController.delete);

module.exports = router;
