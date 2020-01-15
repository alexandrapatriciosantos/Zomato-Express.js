const connection = require('../db/config');

const Product = {};

Product.create = (product, callback) => {
  connection.query(
    `INSERT INTO product (name, description)
                VALUES (
                    ?, 
                    ?
                )`,
    [
      product.name,
      product.description,
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
        description = ? 
      WHERE
        id = ?;`,
    [
      product.name,
      product.description,
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

module.exports = Product;
