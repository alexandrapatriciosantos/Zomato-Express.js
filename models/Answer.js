const connection = require('../db/config');

const Answer = {};

Answer.create = (answerInfo, callback) => {
  connection.query(
    `INSERT INTO answer (answer_option, question_id, question_language_id )
              VALUES (
                  ?,
                  ?,
                  ?
              )`,
    [
      answerInfo.answer_option,
      answerInfo.question_id,
      answerInfo.question_language_id,
    ],
    (err, results, fields) => {
      callback(err, results, fields);
    },
  );
};

module.exports = Answer;
