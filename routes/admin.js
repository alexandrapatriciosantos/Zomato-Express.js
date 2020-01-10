const express = require('express');

const router = express.Router();

const { 
  createQuiz,
  getAllQuizzes,
  editQuiz,
  deleteQuiz,

  getAllQuestions,
  createQuestion,
  editQuestion,
  deleteQuestion,

  createAnswer,
  editAnswer,
  deleteAnswer,
} = require('../controllers/quiz-controller');
const { getAllUsers, deleteUser, editUser } = require('../controllers/admin-controller');

router.get('/quiz', getAllQuizzes);

router.post('/quiz/create', createQuiz);

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



router.get('/question', getAllQuestions);

router.post('/question/create', createQuestion);

router.post('/question/edit', editQuestion);

router.post('/question/delete', deleteQuestion);

router.post('/answer/create', createAnswer);

router.post('/answer/edit', editAnswer);

router.post('/answer/delete', deleteAnswer);

router.get('/users', getAllUsers);

router.post('/user/delete', deleteUser);

router.post('/user/edit', editUser);
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
