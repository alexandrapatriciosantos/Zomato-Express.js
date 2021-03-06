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

Question.getAll = (callback) => {
  connection.query(
    'SELECT * FROM question;',
    (err, results, fields) => {
      callback(err, results, fields);
    },
  );
};

// .addCorrectAnswer

Question.correctAnswer = (correctAnswer, questionId, callback) => {
  connection.query(
    `UPDATE question
      SET
        correct_answer_id = ?
      WHERE
        id = ?
    `,
    [
      +correctAnswer.id,
      +questionId,
    ],
    (err, results, fields) => {
      callback(err, results, fields);
    },
  );
};

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
  connection.query(
    'DELETE FROM question WHERE id=?',
    [+questionInfo.id],
    (err, results, fields) => {
      callback(err, results, fields);
    },
  );
};


module.exports = Question;
