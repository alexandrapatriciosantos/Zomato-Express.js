const connection = require('../db/config')
const User = {}


User.question = (userInfo, callback) => {
    connection.query(
      `INSERT INTO question (question, correct_answer_id, language_id, )
              VALUES (
                  ?,
                  SHA2(?, 256),
                  ?,
                  ?,
                  ?,
                  ?,
                  ?
              )`,
      [userInfo.email, userInfo.password, userInfo.first_name, userInfo.last_name, userInfo.phone_number, +userInfo.user_type_id, +userInfo.region_id], 
      (err, results, fields) => {
        callback(err, results, fields);
      },
    );
  };