

const express = require("express");
const router = express.Router();

//Controllers
const {
  forgotPassword,
  login,
  resetPassword,
  register
} = require("../controllers/auth");


router.route("/register").post(register);

router.route("/login").post(login);

router.route("/forgotpassword").post(forgotPassword);

router.route("/resetpassword/:resetToken").put(resetPassword);

module.exports = router