const moment = require("moment/moment");
const formatDate = require("../config/util");
const instructorsModel = require("../models/instructors");

module.exports = {
  getAllInstructors: (req, res) => {
    instructorsModel
      .getAllInstructors()
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
  addNewInstructor: (req, res) => {
    const data = {
      Username: req.body.Username,
      Password: req.body.Birthdate,
      Name: req.body.Name,
      PhoneNumber: req.body.PhoneNumber,
      Email: req.body.Email,
      Address: req.body.Address,
      Birthdate: req.body.Birthdate,
      Status: "Aktif",
    };
    console.log("Ins" + data);
    instructorsModel
      .addNewInstructors(data)
      .then((result) =>
        res.json({
          status: 200,
          message: "Instructors added successfully",
          data: data,
        })
      )
      .catch((err) =>
        res.json({
          status: 400,
          message: "Instructors added failed",
          data: err,
        })
      );
  },
  updateInstructor: (req, res) => {
    const data = {
      Username: req.body.Username,
      Password: req.body.Password,
      Name: req.body.Name,
      PhoneNumber: req.body.PhoneNumber,
      Email: req.body.Email,
      Address: req.body.Address,
      Birthdate: req.body.Birthdate,
    };
    const id = req.body.InstructorID;

    instructorsModel
      .updateInstructors(data, id)
      .then((result) =>
        res.json({
          status: 200,
          message: "Instructor updated successfully",
          data: data,
        })
      )
      .catch((err) =>
        res.json({
          status: 400,
          message: "Instructor updated failed",
          data: err,
        })
      );
  },
  updateInstructorStatus: (req, res) => {
    const data = {
      Status: req.body.Status,
    };
    const id = req.body.InstructorID;
    console.log(data);
    instructorsModel
      .updateInstructorStatus(data, id)
      .then((result) =>
        res.json({
          status: 200,
          message: "Instructor status updated successfully",
          data: data,
        })
      )
      .catch((err) =>
        res.json({
          status: 400,
          message: "Instructor status updated failed",
          data: err,
        })
      );
  },
  deleteInstructors: (req, res) => {
    const id = req.params.InstructorID;

    instructorsModel
      .deleteInstructor(id)
      .then((result) =>
        res.json({
          status: 200,
          message: "Delete instructor successfully",
          data: result,
        })
      )
      .catch((err) =>
        res.json({
          status: 400,
          message: "Delete instructor failed",
          data: err,
        })
      );
  },
  getInstructorById: (req, res) => {
    const id = req.body.InstructorID;
    instructorsModel
      .getInstructorById(id)
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
