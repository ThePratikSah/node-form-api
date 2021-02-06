const express = require("express");
const {body} = require('express-validator');

//importing users' controller
const authController = require("../controllers/auth-controller");

const router = express.Router();

//add a new user or login user
router.post("/user-auth", [
  body('phone').trim().isInt().isLength({min: 10}).withMessage("Phone must be an integer")
], authController.userAuth);

//verify user's otp
router.post("/verify-user-otp", [
  body('phone').trim().isInt().isLength({min: 10}).withMessage("Phone must be an integer and of 10 digits"),
  body('otp').trim().isInt().isLength({min: 6}).withMessage("OTP" +
      " must be an integer and of 6 digits")
], authController.userOTPVerification);

module.exports = router;