const connection = require('../db/config');

const Question = {};


Question.create = (questionInfo, callback) => {
  connection.query(
    `INSERT INTO question (question, quiz_id)
              VALUES (
                  ?,
                  ?
              )`,
    [questionInfo.question, +questionInfo.quiz_id],
    (err, results, fields) => {
      callback(err, results, fields);
    },
  );
};

// Question.correctAnswer = (questionInfo, callback) => {
//   connection.query(
//     `UPDATE question 
//       SET
//         correct
//               VALUES (
//                   ?,
//                   ?
//               )`,
//     [questionInfo.question, +questionInfo.quiz_id],
//     (err, results, fields) => {
//       callback(err, results, fields);
//     },
//   );
// };

Question.edit = (questionInfo, callback) => {
  connection.query(
    `UPDATE question
      SET 
        question = ?,  
        quiz_id = ? 
      WHERE
        id = ?;`,
    [questionInfo.question, +questionInfo.quiz_id, +questionInfo.id],
    (err, results, fields) => {
      callback(err, results, fields);
    },
  );
};

Question.delete = (questionInfo, callback) => {
  console.log(questionInfo);
  connection.query(
    'DELETE FROM question WHERE id=?',
    [+questionInfo.id],
    (err, results, fields) => {
      callback(err, results, fields);
    },
  );
};

Question.getAll = (callback) => {
  connection.query(
    'SELECT * FROM question LEFT JOIN (SELECT * FROM answer) answer ON answer.question_id = question.id;',
    (err, results, fields) => {
      callback(err, results, fields);
    },
  );
};


module.exports = Question;
