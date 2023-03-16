const express = require("express");
const Route = express.Router();
const authController = require("../controller/auths");

Route.post("/signin", authController.signIn);

module.exports = Route;
