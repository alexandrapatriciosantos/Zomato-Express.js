const connection = require("../db/config");

const Export = {};

Export.getAllResults = callback => {
  connection.query("SELECT * FROM result", (err, results, fields) =>
    callback(err, results, fields)
  );
};

module.exports = Export;
