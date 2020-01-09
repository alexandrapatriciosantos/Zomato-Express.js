const Answer = require('../models/Answer');

const createAnswer = (req, res) => {
  Answer.create(req.body, (err) => {
    if (err) return res.render('error', { err });
    res.redirect('/');
  });
};

// replace res.redirect with appropriate string

module.exports = { createAnswer };
