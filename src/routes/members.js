const express = require("express");
const Route = express.Router();

const membersController = require("../controller/members");

Route.get("/members", membersController.getAllMembers);
Route.post("/members", membersController.addNewMember);
Route.put("/members", membersController.updateMember);
Route.put("/members/status", membersController.updateMemberStatus);
Route.delete("/members/:MemberID", membersController.deleteMember);
module.exports = Route;
