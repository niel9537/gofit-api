const instructorsController = require("../controller/instructors");
const express = require("express");
const Route = express.Router();

Route.get("/instructors", instructorsController.getAllInstructors);
Route.post("/instructors/getbyid", instructorsController.getInstructorById);
Route.post("/instructors", instructorsController.addNewInstructor);
Route.put("/instructors", instructorsController.updateInstructor);
Route.put("/instructors/status", instructorsController.updateInstructorStatus);
Route.delete(
  "/instructors/:InstructorID",
  instructorsController.deleteInstructors
);
module.exports = Route;
