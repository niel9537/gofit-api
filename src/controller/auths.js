const moment = require("moment/moment");
const { nanoid } = require("nanoid");
const formatDate = require("../config/util");
const authModel = require("../models/auths");

module.exports = {
  signIn: (req, res) => {
    const Username = req.body.Username;
    const Password = req.body.Password;
    authModel
      .signIn(Username, Password)
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
