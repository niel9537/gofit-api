const schedulesController = require("../controller/schedules");
const express = require("express");
const Route = express.Router();

Route.get("/schedules", schedulesController.getAllSchedule);
Route.post("/schedules", schedulesController.addNewSchedule);
Route.put("/schedules", schedulesController.updateSchedule);
Route.put("/schedules/status", schedulesController.updateScheduleStatus);
Route.delete("/schedules/:ClassCode", schedulesController.deleteSchedule);
module.exports = Route;
