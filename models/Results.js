const connection = require('../db/config');

const QuizResults = {};

QuizResults.getAll = (callback) => {
  connection.query(
    'SELECT * FROM result',
    (err, results, fields) => {
      callback(err, results, fields);
    },
  );
};


module.exports = QuizResults;
