const Documentation = require('../models/Documentation');


const getAllDocumentation = (req, res, next) => {
  Documentation.getAll((err, results) => {
    if (err) return next(err);
    return res.json({ Documentation: results });
  });
};

const getAllDocumentationByLanguageId = (req, res, next) => {
  Documentation.getAllByLanguageId(req.languageId, (err, results) => {
    if (err) return next(err);
    return res.json({ documentation: results });
  });
};

module.exports = { getAllDocumentation, getAllDocumentationByLanguageId };
