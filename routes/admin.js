const express = require('express');

const router = express.Router();
const {
  createAnswer,
  editAnswer,
  deleteAnswer,
  createQuiz,
  getAllQuizzes,
  editQuiz,
  deleteQuiz,
  getAllQuestions,
  createQuestion,
  editQuestion,
  deleteQuestion,
} = require('../controllers/quiz-controller');
const { getAllUsers, deleteUser, editUser } = require('../controllers/admin-controller');

router.get('/quiz', getAllQuizzes);

router.post('/create/quiz', createQuiz);

router.post('/quiz/edit', editQuiz);

router.post('/quiz/delete', deleteQuiz);

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

router.get('/admin/config/users', getAllUsers);

router.get('/question', getAllQuestions);

router.post('/question/create', createQuestion);

router.post('/question/edit', editQuestion);

router.post('/question/delete', deleteQuestion);

router.post('/admin/config/user/delete', deleteUser);

router.post('/admin/config/user/edit', editUser);
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

router.post('/answer/create', createAnswer);

router.post('/answer/edit', editAnswer);

router.post('/answer/delete', deleteAnswer);

module.exports = router;
