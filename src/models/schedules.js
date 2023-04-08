const db = require("../config/db");

module.exports = {
  getAllSchedules: () => {
    return new Promise((resolve, reject) => {
      db.query(
        `SELECT s.ScheduleID,i.InstructorID, i.Name as InstructorName, c.ClassCode, c.Name as ClassName, s.Date, s.Session,s.Category, s.Status
      FROM schedules s
      LEFT JOIN instructors i ON s.InstructorID = i.InstructorID
      LEFT JOIN classes c ON s.ClassCode = c.ClassCode
      WHERE s.Status NOT IN ('NONAKTIF')`,
        (err, result) => {
          if (!err) {
            resolve(result);
          } else {
            console.log(err);
            reject(err);
          }
        }
      );
    });
  },
  getClass: () => {
    return new Promise((resolve, reject) => {
      db.query(`SELECT * FROM classes`, (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          console.log(err);
          reject(err);
        }
      });
    });
  },
  checkSchedule: (id, code, session, session2, date) => {
    return new Promise((resolve, reject) => {
      const end = 09.0;

      db.query(
        `SELECT IFNULL(COUNT(*),0) AS EXIST FROM schedules
        WHERE InstructorID IN (?)
        AND END BETWEEN (?) AND (?)
        AND Date IN (?)`,
        [id, session, session2, date],
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
  getScheduleByID: (id) => {
    return new Promise((resolve, reject) => {
      db.query(
        `SELECT s.ScheduleID,i.InstructorID, i.Name as InstructorName, c.ClassCode, c.Name as ClassName, s.Date, s.Session,s.Category, s.Status
        FROM schedules s
        LEFT JOIN instructors i ON s.InstructorID = i.InstructorID
        LEFT JOIN classes c ON s.ClassCode = c.ClassCode
        WHERE s.Status NOT IN ('NONAKTIF') AND s.ScheduleID = ?`,
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
        `UPDATE schedules SET ? WHERE ScheduleID = ?`,
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
        `UPDATE schedules SET Status = ? WHERE ScheduleID = ?`,
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
        `DELETE FROM schedules WHERE ScheduleID = ?`,
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
