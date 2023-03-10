const moment = require("moment/moment");
const formatDate = require("../config/util");
const scheduleModel = require("../models/schedules");

module.exports = {
  getAllSchedule: (req, res) => {
    scheduleModel
      .getAllSchedules()
      .then((result) => {
        res.json({
          status: 200,
          message: "Data retrieved successfully",
          data: result,
        });
      })
      .catch((err) => {
        res.json({
          status: 400,
          message: "Data failed to be retrieved",
          data: err,
        });
      });
  },
  addNewSchedule: (req, res) => {
    const data = {
      Name: req.body.Name,
      InstructorID: req.body.InstructorID,
      StartDate: req.body.StartDate,
      EndDate: req.body.EndDate,
      StartSession: req.body.StartSession,
      EndSession: req.body.EndSession,
      Category: req.body.Category,
      Status: "Aktif",
    };
    scheduleModel
      .addNewSchedule(data)
      .then((result) =>
        res.json({
          status: 200,
          message: "Schedule added successfully",
          data: data,
        })
      )
      .catch((err) =>
        res.json({
          status: 400,
          message: "Schedule added failed",
          data: err,
        })
      );
  },
  updateSchedule: (req, res) => {
    const data = {
      Name: req.body.Name,
      InstructorID: req.body.InstructorID,
      StartDate: req.body.StartDate,
      EndDate: req.body.EndDate,
      StartSession: req.body.StartSession,
      EndSession: req.body.EndSession,
      Category: req.body.Category,
    };
    const id = req.body.ClassCode;

    scheduleModel
      .updateSchedule(data, id)
      .then((result) =>
        res.json({
          status: 200,
          message: "Schedule updated successfully",
          data: data,
        })
      )
      .catch((err) =>
        res.json({
          status: 400,
          message: "Schedule updated failed",
          data: err,
        })
      );
  },
  updateScheduleStatus: (req, res) => {
    const data = req.body.Status;
    const id = req.body.ClassCode;
    console.log(data);
    scheduleModel
      .updateScheduleStatus(data, id)
      .then((result) =>
        res.json({
          status: 200,
          message: "Schedule status updated successfully",
          data: data,
        })
      )
      .catch((err) =>
        res.json({
          status: 400,
          message: "Schedule status updated failed",
          data: err,
        })
      );
  },
  deleteSchedule: (req, res) => {
    const id = req.params.ClassCode;

    scheduleModel
      .deleteSchedule(id)
      .then((result) =>
        res.json({
          status: 200,
          message: "Delete schedule successfully",
          data: result,
        })
      )
      .catch((err) =>
        res.json({
          status: 400,
          message: "Delete schedule failed",
          data: err,
        })
      );
  },
};
