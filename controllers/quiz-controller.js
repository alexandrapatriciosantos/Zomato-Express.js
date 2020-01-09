
const Answer = require('../models/Answer');,
const Quiz = require('../models/Quiz');

const createQuiz = (req, res, next) => {
    Quiz.create(req.body, (err) => { 
        console.log(err)
      if (err) return next(err);
      res.redirect('/admin/quiz');
    });
  };

const getAllQuizzes = (req, res, next) => {
    Quiz.getAll((err, results, fields) => {
        if (err) return next(err);
        res.json({ quiz: results });
    });
};

const createAnswer = (req, res) => {
  Answer.create(req.body, (err) => {
    if (err) return res.render('error', { err });
    res.redirect('/');
  });
};
// replace res.redirect with appropriate string

  module.exports = { createQuiz, getAllQuizzes, createAnswer} ;

