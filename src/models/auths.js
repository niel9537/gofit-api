const db = require("../config/db");

module.exports = {
  signIn: (username, password) => {
    return new Promise((resolve, reject) => {
      db.query(
        `SELECT * FROM (SELECT Username, Password, 'INS' as Role, Name, InstructorID as ID FROM instructors
        UNION
        SELECT MemberID as Username,Password, 'MBR' as Role, Name, MemberID as ID FROM members
        UNION
		SELECT Username, Password, Role as Role, Name, EmployeID as ID FROM employes)
AS A WHERE Username = ?  AND Password = ?`,
        [username, password],
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
