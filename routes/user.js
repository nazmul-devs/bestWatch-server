const express = require("express");
const router = express.Router();

// Internal import
const userController = require("../controller/userController.js");

router.get("/all", userController.findUsers);
router.get("/", userController.findUser);
router.post("/", userController.createUser);
router.delete("/:id", userController.deletUser);
router.patch("/", userController.googleLogin);

module.exports = router;
