const connection = require('../db/config');

const Documentation = {};

Documentation.create = (doc, callback) => {
  connection.query(
    `INSERT INTO documentation (title, content, product_id )
              VALUES (
                  ?,
                  ?,
                  ?
              )`,
    [
      doc.title,
      doc.content,
      +doc.product_id,
    ],
    (err, results, fields) => {
      callback(err, results, fields);
    },
  );
};

Documentation.edit = (doc, callback) => {
  connection.query(
    `UPDATE documentation 
    SET title = ?, content = ?, product_id = ? 
    WHERE id = ?`,
    [
      doc.title,
      doc.content,
      +doc.product_id,
      +doc.id,
    ],
    (err, results, fields) => {
      callback(err, results, fields);
    },
  );
};

Documentation.delete = (doc, callback) => {
  connection.query(
    `DELETE FROM documentation 
     WHERE id = ?`,
    [
      +doc.id,
    ],
    (err, results, fields) => {
      callback(err, results, fields);
    },
  );
};

Documentation.getAll = (callback) => {
  connection.query(
    `SELECT documentation.*, product.name AS product_name
    FROM documentation 
    LEFT JOIN product 
    ON documentation.product_id = product.id`,
    (err, results, fields) => callback(err, results, fields),
  );
};

// Restaurant.getAll = (callback) => {
//   connection.query(
//     `SELECT restaurant.*, user.first_name, user.last_name, user.email, user.phone_number, user.user_type_id
//     FROM restaurant
//     LEFT JOIN user ON restaurant.id = user.restaurant_id;`,
//     (err, results, fields) => {
//       callback(err, results, fields);
//     },
//   );
// };

module.exports = Documentation;
