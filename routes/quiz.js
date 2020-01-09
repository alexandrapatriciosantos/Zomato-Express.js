const express = require('express');
const { authenticateWithJwt } = require('../services/jwt');

const router = express.Router();

router.get('/', authenticateWithJwt, (req, res) => res.json({ hey: 'hey' }));

router.get('/:id/question/:questionid', (req, res) => { // how to make sure this is a sub of quiz?? 
  res.send('quiz/:id - on quiz');
});

router.get('/results', (req, res) => {
  res.send('quiz/results');
});

module.exports = router;
