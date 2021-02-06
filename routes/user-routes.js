const express = require("express");

//importing users' controller
const userController = require("../controllers/user-controller");

//importing middleware for auth
const {isUser} = require("../middleware/is-user");

const router = express.Router();

router.post("/form", isUser, userController.submitForm);

module.exports = router;