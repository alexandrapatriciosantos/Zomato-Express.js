const connection = require('../db/config');

const Region = {};

Region.create = (region, callback) => {
  connection.query(
    `INSERT INTO region (name)
                VALUES (
                    ?
                )`,
    [
      region.name,
    ],
    (err, results, fields) => {
      callback(err, results, fields);
    },
  );
};

Region.edit = (region, callback) => {
  connection.query(
    `UPDATE region
      SET 
        name = ? 
      WHERE
        id = ?;`,
    [
      region.name,
      +region.id,
    ],
    (err, results, fields) => {
      callback(err, results, fields);
    },
  );
};

Region.delete = (region, callback) => {
  connection.query(
    `DELETE FROM region 
      WHERE id=?`,
    [+region.id],
    (err, results, fields) => {
      callback(err, results, fields);
    },
  );
};

module.exports = Region;
