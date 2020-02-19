const express = require('express');

const router = express.Router();

const {
  getAllQuizzesByLanguageId,
  getAllQuestions,
  getAllAnswers,
  sendQuizzes,
} = require('../controllers/admin/quiz-controller');

const {
  getAllFaqsByLanguageId,
} = require('../controllers/admin/faq-controller');

const { authenticateWithJwt } = require('../services/jwt');

const {
  getAllDocumentationByLanguageId,
} = require('../controllers/documentation-controller');

const { getContact } = require('../controllers/admin/admin-controller');

// Faq
router.get('/faq', getAllFaqsByLanguageId);

// quiz

router.get(
  '/quiz',
  getAllQuizzesByLanguageId,
  getAllQuestions,
  getAllAnswers,
  sendQuizzes,
);

// documentation

router.get('/document', getAllDocumentationByLanguageId);

// contacts

router.get('/', getContact);

module.exports = router;
