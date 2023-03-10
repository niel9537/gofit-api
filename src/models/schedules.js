const db = require("../config/db");

module.exports = {
  getAllSchedules: () => {
    return new Promise((resolve, reject) => {
      db.query(`SELECT * FROM schedules`, (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          console.log(err);
          reject(err);
        }
      });
    });
  },
  getScheduleByID: (id) => {
    return new Promise((resolve, reject) => {
      db.query(
        `SELECT * FROM schedules WHERE ClassCode=?`,
        [id],
        (err, result) => {
          if (!err) {
            resolve(result);
          } else {
            reject(err);
          }
        }
      );
    });
  },
  addNewSchedule: (data) => {
    return new Promise((resolve, reject) => {
      db.query(`INSERT schedules SET ?`, data, (err, result) => {
        if (!err) resolve(result);
        else reject(err);
      });
    });
  },
  updateSchedule: (data, id) => {
    return new Promise((resolve, reject) => {
      db.query(
        `UPDATE schedules SET ? WHERE ClassCode = ?`,
        [data, id],
        (err, result) => {
          if (!err) {
            resolve(data, id);
          } else {
            reject(err);
          }
        }
      );
    });
  },
  updateScheduleStatus: (data, id) => {
    return new Promise((resolve, reject) => {
      db.query(
        `UPDATE schedules SET Status = ? WHERE ClassCode = ?`,
        [data, id],
        (err, result) => {
          if (!err) {
            resolve(data, id);
          } else {
            reject(err);
          }
        }
      );
    });
  },
  deleteSchedule: (id) => {
    return new Promise((resolve, reject) => {
      db.query(
        `DELETE FROM schedules WHERE ClassCode = ?`,
        id,
        (err, result) => {
          if (!err) {
            resolve(result);
          } else {
            reject(err);
          }
        }
      );
    });
  },
};
