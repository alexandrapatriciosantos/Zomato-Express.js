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
  getAllAnswers,
  createAnswers,
  addCorrectAnswer,
  editAnswer,
  deleteAnswer,
  sendQuizzes,

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


// product
router.get('/product', getAllProducts);
router.post('/product/create', createProduct);
router.put('/product/edit', editProduct);
router.delete('/product/delete', deleteProduct);

// region

router.get('/region', getAllRegions);
router.post('/region/create', createRegion);
router.put('/region/edit', editRegion);
router.delete('/region/delete', deleteRegion);

// users

router.get('/user', getAllUsers);
router.put('/user/edit', editUser);
router.delete('/user/delete', deleteUser);

// user type

router.get('/user/type', getAllUserTypes);

// doc

router.get('/doc', getAllDocumentation);
router.post('/doc/create', createDocumentation);
router.put('/doc/edit', editDocumentation);
router.delete('/doc/delete', deleteDocumentation);

// quiz

router.get('/quiz', getAllQuizzes, getAllQuestions, getAllAnswers, sendQuizzes);
router.post('/quiz/create', createQuiz);
router.put('/quiz/edit', editQuiz);
router.delete('/quiz/delete', deleteQuiz);

// questions

// router.get('/question', getAllQuestions, getAllAnswers);
router.post('/question/create', createQuestion, createAnswers, addCorrectAnswer);
router.put('/question/edit', editQuestion, editAnswer, editAnswer, editAnswer, editAnswer);
router.delete('/question/delete', deleteQuestion);

// answers

// router.post('/answer/create', createAnswer);
router.put('/answer/edit', editAnswer);
router.delete('/answer/delete', deleteAnswer);


// Restaurants
router.get('/restaurant', getAllRestaurants);
router.post('/restaurant/create', createRestaurant);
router.put('/restaurant/edit', editRestaurant);
router.delete('/restaurant/delete', deleteRestaurant);

// Results

router.get('/result', getAllResults);


module.exports = router;
