const connection = require('../db/config');

const User = {};


const cleanUser = (user) => (user
  ? {
    ...user,
    passwordHash: 'hidden',
  }
  : undefined);

User.create = (userInfo, userTypeId, callback) => {
  connection.query(
    `INSERT INTO user (email, passwordHash, first_name, last_name, phone_number, user_type_id, restaurant_id)
            VALUES (
                ?,
                SHA2(?, 256),
                ?,
                ?,
                ?,
                ?,
                ?
            )`,
    [userInfo.email, userInfo.password, userInfo.first_name, userInfo.last_name, userInfo.phone_number, userTypeId, +userInfo.restaurant_id],
    (err, results, fields) => {
      callback(err, results, fields);
    },
  );
};

User.getAll = (callback) => {
  connection.query(
    'SELECT * FROM user',
    (err, results, fields) => {
      callback(err, results, fields);
    },
  );
};

User.edit = (userInfo, callback) => {
  connection.query(
    `UPDATE user 
      SET 
        email = ?,  
        first_name = ?, 
        last_name = ?, 
        phone_number = ?, 
        user_type_id = ?,
        restaurant_id = ?
      WHERE id = ?;`,
    [userInfo.email, userInfo.first_name, userInfo.last_name, userInfo.phone_number, +userInfo.user_type_id, +userInfo.restaurant_id, +userInfo.id],
    (err, results, fields) => {
      callback(err, results, fields);
    },
  );
};

User.delete = (userInfo, callback) => {
  connection.query(
    'DELETE FROM user WHERE id=?',
    [+userInfo.id],
    (err, results, fields) => {
      callback(err, results, fields);
    },
  );
};

User.findbyEmailandPassword = (email, password, callback) => {
  connection.query(
    'SELECT * FROM user WHERE email = ? AND passwordHash = SHA2(?, 256)',
    [email, password],
    (err, results, fields) => {
      callback(err, cleanUser(results[0]), fields);
    },
  );
};

User.findbyEmail = (email, callback) => {
  connection.query(
    'SELECT * FROM user WHERE email = ?',
    [email],
    (err, results, fields) => {
      callback(err, cleanUser(results[0]), fields);
    },
  );
};

// User.findbyID = ()

module.exports = User;
