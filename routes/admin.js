const express = require('express');
const { createAnswer, editAnswer, deleteAnswer } = require('../controllers/quiz-controller');

const router = express.Router();
const { createQuiz, getAllQuizzes } = require('../controllers/quiz-controller');

const {
  getAllQuestions,
  createQuestion,
  editQuestion,
  deleteQuestion,
} = require('../controllers/quiz-controller');

const { getAllUsers, deleteUser, editUser } = require('../controllers/admin-controller');

router.get('/quiz', getAllQuizzes);

router.post('/create/quiz', createQuiz);

router.get('/quiz', (req, res) => {
  res.send('quiz - list');
});

router.get('/create/quiz', (req, res) => {
  res.send('quiz - create');
});

router.get('/quiz/:id/edit', (req, res) => { // how to make sure this is a sub of quiz??
  res.send('quiz/:id - on quiz');
});

router.get('/quiz/:id/:questionid/edit', (req, res) => {
  res.send('quiz/:id - on quiz');
});

router.get('/contact/edit', (req, res) => {
  res.send('contact');
});

router.get('/faq/edit', (req, res) => {
  res.send('faq');
});

router.get('/documentation/edit', (req, res) => {
  res.send('documentation - list');
});

router.get('/documentation/:title/edit', (req, res) => {
  res.send('documentation - title');
});

router.get('/users', getAllUsers);

router.get('/question', getAllQuestions);

router.post('/question/create', createQuestion);

router.post('/question/edit', editQuestion);

router.post('/question/delete', deleteQuestion);

router.post('/user/delete', deleteUser);

router.post('/user/edit', editUser);

router.post('/answer/create', createAnswer);

router.post('/answer/edit', editAnswer);

router.post('/answer/delete', deleteAnswer);

module.exports = router;

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
