const express = require("express");
const router = express.Router();

// Internal import
const userController = require("../controller/userController.js");

router.get("/", userController.findUsers);
router.post("/", userController.makeAdmin);
router.delete("/:id", userController.deleteAdmin);

module.exports = router;
