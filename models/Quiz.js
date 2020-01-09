const connection = require('../db/config');
const Quiz = {};


Quiz.create = (quizInfo, callback) => {
  connection.query(
    `INSERT INTO quiz (name, staff_type, package, language_id)
              VALUES (
                  ?,
                  ?,
                  ?,
                  ?
              )`,
    [quizInfo.name, quizInfo.staff_type, quizInfo.package, +quizInfo.language_id],
    (err, results, fields) => {
      callback(err, results, fields);
    },
  );
};

Quiz.getAll = (callback) => {
  connection.query(
    'SELECT * FROM quiz',
    (err, results, fields) => callback(err, results, fields),
  );
};

module.exports = Quiz;
