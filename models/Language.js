const connection = require('../db/config');

const Language = {};

Language.getAll = (callback) => {
  connection.query(
    'SELECT * FROM language;',
    (err, results, fields) => callback(err, results, fields),
  );
};

module.exports = Language;
