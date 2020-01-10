const Question = require('../models/Question');
const Answer = require('../models/Answer');
const Quiz = require('../models/Quiz');

const createQuiz = (req, res, next) => {
  Quiz.create(req.body, (err) => {
    if (err) return next(err);
    res.sendStatus(200);
  });
};

const getAllQuizzes = (req, res, next) => {
  Quiz.getAll((err, results, fields) => {
    if (err) return next(err);
    res.json({ quiz: results });
  });
};

const editQuiz = (req, res, next) => {
  Quiz.edit((err, results, fields) => {
    if (err) return next(err);
    res.json({
      quiz: results,
      message: 'these are the changes you made',
    });
  });
};

const deleteQuiz = (req, res, next) => {
  Quiz.delete(req.body, (err) => {
    if (err) return next(err);
    return res.json({ message: 'Quiz deleted' });
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

const createAnswer = (req, res, next) => {
  Answer.create(req.body, (err) => {
    if (err) return next(err);
    return res.sendStatus(200);
  });
};

const editAnswer = (req, res, next) => {
  Answer.edit(req.body, (err) => {
    if (err) return next(err);
    return res.sendStatus(200);
  });
};

const deleteAnswer = (req, res, next) => {
  Answer.delete(req.body, (err) => {
    if (err) return next(err);
    return res.sendStatus(200);
  });
};

// create answer should return a positive message?
// OR
// {answer : results} ? Does it make sense to send back
// what the zomato admin just typed?


module.exports = {
  createQuiz,
  getAllQuizzes,
  editQuiz,
  deleteQuiz,
  createAnswer,
  editAnswer,
  deleteAnswer,
  createQuestion,
  editQuestion,
  deleteQuestion,
  getAllQuestions,

};
