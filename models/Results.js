const connection = require('../db/config');

const Results = {};

Results.getAll = (callback) => {
  connection.query(
    'SELECT * FROM results',
    (err, results, fields) => {
      callback(err, results, fields);
    },
  );
};


module.exports = Results;
