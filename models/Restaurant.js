const connection = require('../db/config');

const Restaurant = {};

Restaurant.create = (restaurantInfo, callback) => {
  connection.query(
    `INSERT INTO restaurant (name, region_id)
            VALUES (
                ?,
                ?
            )`,
    [restaurantInfo.name, +restaurantInfo.region_id,],
    (err, results, fields) => {
      callback(err, results, fields);
    },
  );
};

Restaurant.getAll = (callback) => {
  connection.query(
    'SELECT * FROM restaurant LEFT JOIN (SELECT * FROM user) user ON user.restaurant_id = restaurant.id;',
    (err, results, fields) => {
      callback(err, results, fields);
    },
  );
};

Restaurant.edit = (restaurantInfo, callback) => {
  connection.query(
    `UPDATE restaurant 
      SET 
        name = ?, 
        region_id = ?
      WHERE id = ?;`,
    [restaurantInfo.name, restaurantInfo.region_id, +restaurantInfo.id],
    (err, results, fields) => {
      callback(err, results, fields);
    },
  );
};

Restaurant.delete = (restaurantInfo, callback) => {
  connection.query(
    'DELETE FROM restaurant WHERE id=?',
    [+restaurantInfo.id],
    (err, results, fields) => {
      callback(err, results, fields);
    },
  );
};

// restaurant.findbyID = ()

module.exports = Restaurant;
