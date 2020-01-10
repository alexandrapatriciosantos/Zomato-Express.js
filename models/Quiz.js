const connection = require('../db/config');
const Quiz = {};


Quiz.create = (quizInfo, callback) => {
  connection.query(
    `INSERT INTO quiz (name, user_type_id, package, language_id)
              VALUES (
                  ?,
                  ?,
                  ?,
                  ?
              )`,
    [quizInfo.name, +quizInfo.user_type_id, +quizInfo.package_id, +quizInfo.language_id],
    (err, results, fields) => {
      callback(err, results, fields);
    },
  );
};

Quiz.getAll = (callback) => {
  connection.query(
    'SELECT * FROM quiz LEFT JOIN ( SELECT * FROM question) question ON question.quiz_id = quiz.id LEFT JOIN (SELECT * FROM answer) answer ON answer.question_id = question.id;',
    (err, results, fields) => callback(err, results, fields),
  );
};

Quiz.edit = (quizInfo, callback) => {
  connection.query(
    `UPDATE quiz
      SET 
        name = ?, 
        user_type_id = ?, 
        language_id = ?, 
        package_id = ? 
      WHERE
        id = ?;`,
    [quizInfo.name, +quizInfo.user_type_id, +quizInfo.language_id, +quizInfo.package_id, +quizInfo.id],
    (err, results, fields) => {
      callback(err, results, fields);
    },
  );
};

// Quiz.delete = (callback) => {
//   connection.query(
//     'DELETE quiz WHERE id=?',
//     (err, results, fields) => {
//       callback(err, results, fields);
//     },
//   );
// };



module.exports = Quiz;
