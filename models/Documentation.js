const connection = require('../db/config');

const Documentation = {};

// Documentation.create = (documentation, callback) => {
//   connection.query(
//     `INSERT INTO documentation (title, content)
//                 VALUES (
//                     ?,
//                     ?
//                 )`,
//     [documentation.title, +documentation.content],
//     (err, results, fields) => {
//       callback(err, results, fields);
//     },
//   );
// };

Documentation.getAll = (callback) => {
  connection.query(
    'SELECT * FROM documentation;',
    (err, results, fields) => callback(err, results, fields),
  );
};
module.exports = Documentation;
