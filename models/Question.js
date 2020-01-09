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
    [
      questionInfo.question,
      questionInfo.correct_answer_id, // should it be defined in this table? Order won't work
      questionInfo.language_id,
      questionInfo.quiz_id,
    ],
    (err, results, fields) => {
      callback(err, results, fields);
    },
  );
};

Question.edit = (questionInfo, callback) => {
  connection.query(
    `UPDATE question 
    SET (question_option, question_id, question_language_id ) = ? 
    WHERE id = ?`,
    [
      questionInfo.question,
      questionInfo.correct_answer_id, // should it be defined in this table? Order won't work
      questionInfo.language_id,
      questionInfo.quiz_id,
      questionInfo.id,
    ],
    (err, results, fields) => {
      callback(err, results, fields);
    },
  );
};

Question.delete = (questionInfo, callback) => {
  connection.query(
    `DELETE FROM question 
     WHERE id = ?`,
    [
      questionInfo.id,
    ],
    (err, results, fields) => {
      callback(err, results, fields);
    },
  );
};

module.exports = Question;
