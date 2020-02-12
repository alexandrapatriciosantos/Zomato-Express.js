const Documentation = require('../../models/Documentation');

const createDocumentation = (req, res, next) => {
  console.log('hey', req.body);
  Documentation.create(req.body, (err) => {
    if (err) return next(err);
    return res.sendStatus(200);
  });
};

const editDocumentation = (req, res, next) => {
  Documentation.edit(req.body, (err) => {
    if (err) return next(err);
    return res.sendStatus(200);
  });
};

const deleteDocumentation = (req, res, next) => {
  Documentation.delete(req.body, (err) => {
    if (err) return next(err);
    return res.json({ message: 'Documentation deleted' });
  });
};

const getAllDocumentation = (req, res, next) => {
  Documentation.getAll((err, results) => {
    if (err) return next(err);
    return res.json({ Documentation: results });
  });
};

module.exports = {
  createDocumentation,
  editDocumentation,
  deleteDocumentation,
  getAllDocumentation,
};
