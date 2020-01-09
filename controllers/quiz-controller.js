const Question = require('../models/Question');

const createQuestion = (req, res, next) => {
  Question.create(req.body, (err, result) => {
    if (err) return next(err);
    res.sendStatus(200);
  });
};

const editQuestion = (req, res, next) => {
  Question.edit(req.body, (err, result, fields) => {
    if (err) return next(err);
    res.sendStatus(200);
  });
};

const deleteQuestion = (req, res, next) => {
  Question.delete(req.body, (err) => {
    if (err) return next(err);
    return res.json({ message: 'question deleted' });
  });
};

const getAllQuestions = (req, res, next) => {
  Question.getAll((err, results) => {
    if (err) return next(err);
    return res.json({ questions: results });
  });
};


module.exports = {
  createQuestion,
  editQuestion,
  deleteQuestion,
  getAllQuestions,
};
