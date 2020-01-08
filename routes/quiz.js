const express = require('express');
const router = express.Router();
const { authenticateWithJwt } = require('../services/jwt');

router.get('/', authenticateWithJwt, (req, res) => res.json({ hey: 'hey' }));

router.get('/:id/question/:questionid', (req, res) => { // how to make sure this is a sub of quiz?? 
  res.send('quiz/:id - on quiz');
});

router.get('/results', (req, res) => {
  res.send('quiz/results');
});

module.exports = router;
