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

const { getAllDocumentation } = require('../controllers/documentation-controller');

const { getContact } = require('../controllers/admin/admin-controller');

// Faq
router.get('/faq', (req, res) => {
  res.send('faq');
});

// quiz

router.get('/quiz', getBrowserLang, getAllQuizzesByLanguageId, getAllQuestions, getAllAnswers, sendQuizzes);

// doumentation

router.get('/', getBrowserLang, getAllDocumentation);

router.get('/:title', (req, res) => {
  res.send('documentation - title, e.g. documentation/health');
});

// contacts

router.get('/', getBrowserLang, getContact);

module.exports = router;
