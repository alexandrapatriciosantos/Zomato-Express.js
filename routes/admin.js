const express = require('express');
const {
  createAnswer, editAnswer, deleteAnswer, createQuestion, editQuestion, deleteQuestion,
} = require('../controllers/quiz-controller');
const { createQuiz, getAllQuizzes } = require('../controllers/quiz-controller');

const router = express.Router();

router.get('/quiz', getAllQuizzes);

router.post('/create/quiz', createQuiz);

// router.get('/create/quiz', (req, res) => {
//   res.send('quiz - create');
// });

// router.get('/quiz/:id/edit', (req, res) => {
//   res.send('quiz/:id - on quiz');
// });


// router.get('/quiz/:id/:questionid/edit', (req, res) => {
//   res.send('quiz/:id - on quiz');
// });

// router.get('/contact/edit', (req, res) => {
//   res.send('contact');
// });

// router.get('/faq/edit', (req, res) => {
//   res.send('faq');
// });

// router.get('/documentation/edit', (req, res) => {
//   res.send('documentation - list');
// });

// router.get('/documentation/:title/edit', (req, res) => {
//   res.send('documentation - title');
// });

// answers

router.post('/answer/create', createAnswer);

router.post('/answer/edit', editAnswer);

router.post('/answer/delete', deleteAnswer);

// questions

router.post('/question/create', createQuestion);

router.post('/question/edit', editQuestion);

router.post('/question/delete', deleteQuestion);

module.exports = router;
