const connection = require('../db/config');

const Restaurant = {};

Restaurant.create = (restaurantInfo, callback) => {
  connection.query(
    `INSERT INTO restaurant (name, region_id)
            VALUES (
                ?,
                ?
            )`,
    [restaurantInfo.name, +restaurantInfo.region_id],
    (err, results, fields) => {
      callback(err, results, fields);
    },
  );
};

Restaurant.getAll = (callback) => {
  connection.query(
    'SELECT restaurant.*, user.first_name, user.last_name, user.email, user.phone_number, user.user_type_id FROM restaurant LEFT JOIN user ON restaurant.id = user.restaurant_id;',
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
