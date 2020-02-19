const connection = require("../db/config");

const QuizResults = {};

QuizResults.getAll = callback => {
  connection.query("SELECT * FROM result", (err, results, fields) => {
    callback(err, results, fields);
  });
};

// update to include the right fields

QuizResults.postResult = (quizResult, callback) => {
  connection.query(
    `INSERT INTO result (user_id, quiz_id, quiz_name, quiz_language_id, time_to_complete_seconds, time_of_day, score_out_of_10)
              VALUES (
                  ?,
                  ?,
                  ?,
                  ?,
                  ?,
                  ?,
                  ?
              )`,
    [
      quizResult.user_id,
      quizResult.quiz_id,
      quizResult.quiz_name,
      quizResult.quiz_language_id,
      quizResult.time_to_complete_seconds,
      quizResult.time_of_day,
      quizResult.score_out_of_10
    ],
    (err, results, fields) => {
      callback(err, results, fields);
    }
  );
};

module.exports = QuizResults;
