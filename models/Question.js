const connection = require('../db/config');

const Question = {};


Question.create = (questionInfo, callback) => {
  connection.query(
    `INSERT INTO question (question, correct_answer_id, language_id, quiz_id)
              VALUES (
                  ?,
                  ?,
                  ?,
                  ?
              )`,
    [questionInfo.question, +questionInfo.correct_answer_id, +questionInfo.language_id, +questionInfo.quiz_id],
    (err, results, fields) => {
      callback(err, results, fields);
    },
  );
};

Question.edit = (questionInfo, callback) => {
  connection.query(
    `UPDATE question
      SET 
        question = ?, s
        correct_answer_id = ?, 
        language_id = ?, 
        quiz_id = ? 
      WHERE
        id = ?;`,
    [questionInfo.question, questionInfo.correct_answer_id, +questionInfo.language_id, +questionInfo.quiz_id, +questionInfo.id],
    (err, results, fields) => {
      callback(err, results, fields);
    },
  );
};

Question.delete = (callback) => {
  connection.query(
    'DELETE FROM question WHERE id=?',
    (err, results, fields) => {
      callback(err, results, fields);
    },
  );
};

Question.getAll = (callback) => {
  connection.query(
    'SELECT * FROM question',
    (err, results, fields) => {
      callback(err, results, fields);
    },
  );
};


module.exports = Question;
