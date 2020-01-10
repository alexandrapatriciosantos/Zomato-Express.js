const connection = require('../db/config');

const User = {};


const cleanUser = (user) => (user
  ? {
    ...user,
    passwordHash: 'hidden',
  }
  : undefined);

User.create = (userInfo, callback) => {
  connection.query(
    `INSERT INTO user (email, passwordHash, first_name, last_name, phone_number, user_type_id, region_id)
            VALUES (
                ?,
                SHA2(?, 256),
                ?,
                ?,
                ?,
                ?,
                ?
            )`,
    [userInfo.email, userInfo.password, userInfo.first_name, userInfo.last_name, userInfo.phone_number, +userInfo.user_type_id, +userInfo.region_id],
    (err, results, fields) => {
      callback(err, results, fields);
    },
  );
};

User.update = (userInfo, callback) => {
  connection.query(
    `UPDATE user SET 
    email = ?, 
    passwordHash = ?, 
    first_name = ?, 
    last_name = ?, 
    phone_number = ?, 
    user_type_id = ?, 
    region_id = ?,
    WHERE id = ?`,
    [userInfo.email, userInfo.password, userInfo.first_name, userInfo.last_name, userInfo.phone_number, +userInfo.user_type_id, +userInfo.region_id],
    (err, results, fields) => {
      callback(err, results, fields);
    },
  );
};

User.delete = (userInfo, callback) => {
  connection.query(
    'DELETE FROM user WHERE id=?',
    [userInfo.email, userInfo.password, userInfo.first_name, userInfo.last_name, userInfo.phone_number, +userInfo.user_type_id, +userInfo.region_id],
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

User.findbyEmailandPassword = (email, password, callback) => {
  connection.query(
    'SELECT * FROM user WHERE email = ? AND passwordHash = SHA2(?, 256)',
    [email, password],
    (err, results, fields) => {
      console.log(email, password);
      console.log(results, err);
      callback(err, cleanUser(results[0]), fields);
    },
  );
};

// User.findbyID = ()

module.exports = User;
