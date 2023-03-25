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
  checkSchedule: (req, res) => {
    var timestring1 = req.body.Session;
    var startdate = moment(timestring1, "HH:mm").add(1, "hour");
    const id = req.body.InstructorID;
    const code = req.body.ClassCode;
    const session = req.body.Session;
    const session2 = startdate.format("HH:mm");
    const date = req.body.Date;
    console.log(session, session2);
    scheduleModel
      .checkSchedule(id, code, session, session2, date)
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
  getClass: (req, res) => {
    scheduleModel
      .getClass()
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
    var timestring1 = req.body.Session;
    var startdate = moment(timestring1, "HH:mm").add(1, "hour");
    var session2 = startdate.format("HH:mm");
    const data = {
      InstructorID: req.body.InstructorID,
      ClassCode: req.body.ClassCode,
      Date: req.body.Date,
      Session: req.body.Session,
      Category: req.body.Category,
      End: session2,
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
    var timestring1 = req.body.Session;
    var startdate = moment(timestring1, "HH:mm").add(1, "hour");
    var session2 = startdate.format("HH:mm");
    const data = {
      InstructorID: req.body.InstructorID,
      ClassCode: req.body.ClassCode,
      Date: req.body.Date,
      Session: req.body.Session,
      Category: req.body.Category,
      End: session2,
    };
    const id = req.body.ScheduleID;
    console.log(data);
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
    const id = req.body.ScheduleID;
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
    const id = req.params.ScheduleID;

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
  getScheduleById: (req, res) => {
    const id = req.body.ScheduleID;
    scheduleModel
      .getScheduleByID(id)
      .then((result) =>
        res.json({
          status: 200,
          message: "Data retrieved successfully",
          data: result,
        })
      )
      .catch((err) =>
        res.json({
          status: 400,
          message: "Data failed to be retrieved",
          data: err,
        })
      );
  },
};
