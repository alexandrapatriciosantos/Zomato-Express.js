const express = require('express');

const router = express.Router();

const {
  getBrowserLang,
} = require('../controllers/language-controller');

const {
  getAllQuizzesByLanguageId,
  getAllQuestions,
  getAllAnswers,
  sendQuizzes,
} = require('../controllers/admin/quiz-controller');

const {
  getAllFaqsByLanguageId,
} = require('../controllers/admin/faq-controller');


const { getAllDocumentation } = require('../controllers/documentation-controller');

const { getContact } = require('../controllers/admin/admin-controller');

// Faq
router.get('/faq', getBrowserLang, getAllFaqsByLanguageId);

// quiz

router.get('/quiz', getBrowserLang, getAllQuizzesByLanguageId, getAllQuestions, getAllAnswers, sendQuizzes);

// documentation

router.get('/document', getBrowserLang, getAllDocumentation);


// contacts

router.get('/', getBrowserLang, getContact);

module.exports = router;
