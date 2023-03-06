const db = require("./../config/db");

module.exports = {
  getAllInstructors: () => {
    return new Promise((resolve, reject) => {
      db.query(`SELECT * FROM instructors`, (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          console.log(err);
          reject(err);
        }
      });
    });
  },
  getInstructorsByID: (id) => {
    return new Promise((resolve, reject) => {
      db.query(
        `SELECT * FROM instructors WHERE InstructorsId=?`,
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
  addNewInstructors: (data) => {
    return new Promise((resolve, reject) => {
      db.query(`INSERT instructors SET ?`, data, (err, result) => {
        if (!err) resolve(result);
        else reject(err);
      });
    });
  },
  updateInstructors: (data, id) => {
    return new Promise((resolve, reject) => {
      db.query(
        `UPDATE instructors SET ? WHERE InstructorID = ?`,
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
  updateInstructorStatus: (data, id) => {
    return new Promise((resolve, reject) => {
      db.query(
        `UPDATE instructors SET Status = ? WHERE InstructorID = ?`,
        [data.Status, id],
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
  deleteInstructor: (id) => {
    return new Promise((resolve, reject) => {
      db.query(
        `DELETE FROM instructors WHERE InstructorID = ?`,
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
