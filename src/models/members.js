const db = require("../config/db");

module.exports = {
  getAllMembers: () => {
    return new Promise((resolve, reject) => {
      db.query(
        `SELECT * FROM members WHERE status="Aktif" OR status="Pending"`,
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
  getLastMemberId: () => {
    return new Promise((resolve, reject) => {
      db.query(
        `SELECT MemberID
      FROM members
      ORDER BY SUBSTRING(MemberID, 7) DESC lIMIT 1`,
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
  getMemberById: (id) => {
    return new Promise((resolve, reject) => {
      db.query(
        `SELECT * FROM members WHERE MemberID=?`,
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
  addNewMember: (data) => {
    return new Promise((resolve, reject) => {
      db.query(`INSERT members SET ?`, data, (err, result) => {
        if (!err) resolve(result);
        else reject(err);
      });
    });
  },
  updateMember: (data, id) => {
    return new Promise((resolve, reject) => {
      db.query(
        `UPDATE members SET ? WHERE MemberID = ?`,
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
  updateMemberStatus: (data, id) => {
    return new Promise((resolve, reject) => {
      db.query(
        `UPDATE members SET Status = ? WHERE MemberID = ?`,
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
  deleteMember: (id) => {
    return new Promise((resolve, reject) => {
      db.query(`DELETE FROM members WHERE MemberID = ?`, id, (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(err);
        }
      });
    });
  },
};
