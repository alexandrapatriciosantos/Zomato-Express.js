const Question = require('../models/Question');
const Answer = require('../models/Answer');
const Quiz = require('../models/Quiz');

const createQuiz = (req, res, next) => {
  Quiz.create(req.body, (err) => {
    console.log(err);
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

const createAnswer = (req, res) => {
  Answer.create((err, results, fields, next) => {
    if (err) return next(err);
    return res.json({ message: 'Answer created' });
  });
};
const editAnswer = (req, res) => {
  Answer.edit((err, results, fields, next) => {
    if (err) return next(err);
    return res.json({ message: 'Answer edited' });
  });
};

const deleteAnswer = (req, res) => {
  Answer.delete((err, results, fields, next) => {
    if (err) return next(err);
    return res.json({ message: 'Answer deleted' });
  });
};

// create answer should return a positive message?
// OR
// {answer : results} ? Does it make sense to send back
// what the zomato admin just typed?


module.exports = {
  createQuiz,
  getAllQuizzes,
  createAnswer,
  editAnswer,
  deleteAnswer,
  createQuestion,
  editQuestion,
  deleteQuestion,
  getAllQuestions,

};
