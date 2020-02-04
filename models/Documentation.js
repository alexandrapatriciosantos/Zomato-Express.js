const connection = require('../db/config');

const Documentation = {};

Documentation.create = (doc, callback) => {
  connection.query(
    `INSERT INTO documentation (title, content, language_id, product_id )
              VALUES (
                  ?,
                  ?,
                  ?,
                  ?
              )`,
    [
      doc.title,
      doc.content,
      +doc.language_id,
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
    SET title = ?, content = ?, language_id = ?, product_id = ? 
    WHERE id = ?`,
    [
      doc.title,
      doc.content,
      +doc.language_id,
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
    `SELECT documentation.*, language.name AS language_name, product.name AS product_name
    FROM documentation 
    LEFT JOIN language 
    ON documentation.language_id = language.id
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
