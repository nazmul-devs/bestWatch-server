const express = require("express");
const router = express.Router();

// Internal import
const userController = require("../controller/userController.js");

router.get("/", userController.findUser);
router.post("/", userController.createUser);
router.delete("/:id", userController.deletUser);

module.exports = router;
