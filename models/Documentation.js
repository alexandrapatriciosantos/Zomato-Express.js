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
    'SELECT * FROM documentation;',
    (err, results, fields) => callback(err, results, fields),
  );
};

module.exports = Documentation;
