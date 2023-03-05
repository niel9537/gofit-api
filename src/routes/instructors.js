const instructorsController = require("../controller/instructors");
const express = require("express");
const Route = express.Router();

Route.get("/instructors", instructorsController.getAllInstructors);
Route.post("/instructors", instructorsController.addNewInstructor);
module.exports = Route;
