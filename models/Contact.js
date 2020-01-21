const connection = require('../db/config');

const Contact = {};

Contact.getAll = (callback) => {
  connection.query(
    'SELECT * FROM contact;',
    (err, results, fields) => callback(err, results, fields),
  );
};
module.exports = Contact;
