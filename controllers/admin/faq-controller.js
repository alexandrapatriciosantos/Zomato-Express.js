const Faq = require('../../models/Faq');

const createFaq = (req, res, next) => {
  Faq.create(req.body, (err) => {
    if (err) return next(err);
    return res.sendStatus(200);
  });
};

const getAllFaqs = (req, res, next) => {
  Faq.getAll((err, results) => {
    if (err) return next(err);
    return res.json({ faqs: results });
  });
};

const getAllFaqsByLanguageId = (req, res, next) => {
  Faq.getAllByLanguageId(req.languageId, (err, results) => {
    if (err) return next(err);
    req.faqs = results;
    next();
  });
};

const editFaq = (req, res, next) => {
  Faq.edit(req.body, (err) => {
    if (err) return next(err);
    return res.sendStatus(200);
  });
};

const deleteFaq = (req, res, next) => {
  Faq.delete(req.body, (err) => {
    if (err) return next(err);
    return res.json({ message: 'Faq deleted' });
  });
};


module.exports = {
  createFaq,
  getAllFaqs,
  getAllFaqsByLanguageId,
  editFaq,
  deleteFaq,
};
