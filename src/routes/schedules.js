const schedulesController = require("../controller/schedules");
const express = require("express");
const Route = express.Router();

Route.post("/schedules/check", schedulesController.checkSchedule);
Route.post("/schedules/getbyid", schedulesController.getScheduleById);
Route.get("/schedules", schedulesController.getAllSchedule);
Route.get("/class", schedulesController.getClass);
Route.post("/schedules", schedulesController.addNewSchedule);
Route.put("/schedules", schedulesController.updateSchedule);
Route.put("/schedules/status", schedulesController.updateScheduleStatus);
Route.delete("/schedules/:ClassCode", schedulesController.deleteSchedule);
module.exports = Route;
