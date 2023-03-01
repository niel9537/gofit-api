const moment = require("moment/moment");
const { nanoid } = require("nanoid");
const formatDate = require("../config/util");
const membersModel = require("../models/members");

module.exports = {
  getAllMembers: (req, res) => {
    membersModel
      .getAllMembers()
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
  addNewMember: (req, res) => {
    membersModel
      .getLastMemberId()
      .then((result) => newMember(req, res, result[0].MemberID));
  },
  updateMember: (req, res) => {
    const data = {
      Username: req.body.Username,
      Password: req.body.Password,
      Name: req.body.Name,
      PhoneNumber: req.body.PhoneNumber,
      Address: req.body.Address,
    };
    const id = req.body.MemberID;

    membersModel
      .updateMember(data, id)
      .then((result) =>
        res.json({
          status: 200,
          message: "Member updated successfully",
          data: data,
        })
      )
      .catch((err) =>
        res.json({
          status: 400,
          message: "Member updated failed",
          data: err,
        })
      );
  },
  updateMemberStatus: (req, res) => {
    const data = {
      Status: req.body.Status,
    };
    const id = req.body.MemberID;

    membersModel
      .updateMemberStatus(data, id)
      .then((result) =>
        res.json({
          status: 200,
          message: "Member status updated successfully",
          data: data,
        })
      )
      .catch((err) =>
        res.json({
          status: 400,
          message: "Member status updated failed",
          data: err,
        })
      );
  },
  deleteMember: (req, res) => {
    const id = req.params.MemberID;

    membersModel
      .deleteMember(id)
      .then((result) =>
        res.json({
          status: 200,
          message: "Delete member successfully",
          data: result,
        })
      )
      .catch((err) =>
        res.json({
          status: 400,
          message: "Delete member failed",
          data: err,
        })
      );
  },
  const: (newMember = (req, res, id) => {
    var lastId = id.split(".")[2];
    const currentDate = new Date();
    var dd = currentDate.getDate();
    var mm = currentDate.getMonth() + 1;

    if (dd < 10) dd = "0" + dd;
    if (mm < 10) mm = "0" + mm;
    var memberID = dd + "." + mm + "." + ++lastId;

    const member = {
      MemberID: memberID,
      ClassCode: "",
      GymCode: "",
      Username: req.body.Username,
      Password: req.body.Password,
      Name: req.body.Name,
      PhoneNumber: req.body.PhoneNumber,
      Address: req.body.Address,
      StartDate: moment().format("YYYY-MM-DD"),
      EndDate: moment().add(1, "years").format("YYYY-MM-DD"),
      Status: "Pending",
    };

    membersModel
      .addNewMember(member)
      .then((result) =>
        res.json({
          status: 200,
          message: "Member added successfully",
          data: member,
        })
      )
      .catch((err) =>
        res.json({
          status: 400,
          message: "Member could not be added",
          data: err,
        })
      );
  }),
};
