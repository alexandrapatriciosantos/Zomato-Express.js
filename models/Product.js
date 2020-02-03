const connection = require('../db/config');

const Product = {};

Product.create = (product, callback) => {
  connection.query(
    `INSERT INTO product (name, description, language_id)
                VALUES (
                    ?, 
                    ?,
                    ?
                )`,
    [
      product.name,
      product.description,
      +product.language_id,
    ],
    (err, results, fields) => {
      callback(err, results, fields);
    },
  );
};

Product.edit = (product, callback) => {
  connection.query(
    `UPDATE product
      SET 
        name = ?,  
        description = ?,
        language_id = ? 
      WHERE
        id = ?`,
    [
      product.name,
      product.description,
      +product.language_id,
      +product.id,
    ],
    (err, results, fields) => {
      callback(err, results, fields);
    },
  );
};

Product.delete = (product, callback) => {
  connection.query(
    `DELETE FROM product 
    WHERE id=?`,
    [+product.id],
    (err, results, fields) => {
      callback(err, results, fields);
    },
  );
};

Product.getAll = (callback) => {
  connection.query(
    'SELECT * FROM product;',
    (err, results, fields) => callback(err, results, fields),
  );
};

module.exports = Product;
