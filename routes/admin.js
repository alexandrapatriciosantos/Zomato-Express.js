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
  createAnswers,
  addCorrectAnswer,
  editAnswer,
  deleteAnswer,

} = require('../controllers/admin/quiz-controller');

const {
  getAllUsers,
  getAllUserTypes,
  deleteUser,
  editUser,
  getAllProducts,
  createProduct,
  editProduct,
  deleteProduct,
  getAllRestaurants,
  deleteRestaurant,
  editRestaurant,
  createRestaurant,
  createRegion,
  editRegion,
  deleteRegion,
  getAllRegions,
  getAllResults,

} = require('../controllers/admin/admin-controller');

const {
  createDocumentation,
  editDocumentation,
  deleteDocumentation,
  getAllDocumentation,

} = require('../controllers/admin/docs-controller');

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

// product
router.get('/product', getAllProducts)
router.post('/product/create', createProduct);
router.put('/product/edit', editProduct);
router.delete('/product/delete', deleteProduct);

// region

router.post('/region/create', createRegion);
router.put('/region/edit', editRegion);
router.delete('/region/delete', deleteRegion);
router.get('/region', getAllRegions);

// users

router.get('/user', getAllUsers);

router.post('/user/delete', deleteUser);

router.post('/user/edit', editUser);

// user type

router.get('/user/type', getAllUserTypes);

// doc

router.get('/doc', getAllDocumentation);

router.post('/doc/create', createDocumentation);

router.put('/doc/edit', editDocumentation);

router.delete('/doc/delete', deleteDocumentation);

// quiz

router.get('/quiz', getAllQuizzes);

router.post('/quiz/create', createQuiz);

router.post('/quiz/edit', editQuiz);

router.post('/quiz/delete', deleteQuiz);

// questions

router.get('/question', getAllQuestions);

router.post('/question/create', createQuestion, createAnswers, addCorrectAnswer);

router.put('/question/edit', editQuestion);

router.post('/question/delete', deleteQuestion);

// answers

// router.post('/answer/create', createAnswer);

router.put('/answer/edit', editAnswer);

router.delete('/answer/delete', deleteAnswer);

router.post('/user/delete', deleteUser);

router.post('/user/edit', editUser);

// Restaurants
router.get('/restaurant', getAllRestaurants);

router.put('/restaurant/edit', editRestaurant);

router.post('/restaurant/create', createRestaurant);

router.delete('/restaurant/delete', deleteRestaurant);

// Results

router.get('/result', getAllResults);

module.exports = router;
