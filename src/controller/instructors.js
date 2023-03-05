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
      Password: req.body.Password,
      Name: req.body.Name,
      PhoneNumber: req.body.PhoneNumber,
      Email: req.body.Email,
      Address: req.body.Address,
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
};
