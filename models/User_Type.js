const connection = require('../db/config');

const User_Type = {};

User_Type.getAll = (callback) => {
  connection.query(
    'SELECT * FROM user_type',
    (err, results, fields) => {
      callback(err, results, fields);
    },
  );
};

module.exports = User_Type;
