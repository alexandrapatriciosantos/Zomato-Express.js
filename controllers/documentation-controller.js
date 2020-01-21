const Documentation = require('../models/Documentation');


const getAllDocumentation = (req, res, next) => {
  Documentation.getAll((err, results) => {
    if (err) return next(err);
    return res.json({ Documentation: results });
  });
};


module.exports = { getAllDocumentation };
