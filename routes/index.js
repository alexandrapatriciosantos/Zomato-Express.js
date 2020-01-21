const express = require('express');

const router = express.Router();
// const authenticateWithJwt = require('../services/jwt');

// restaurateurs

router.get('/contact', (req, res) => {
  res.send('contact');
});

router.get('/faq', (req, res) => {
  res.send('faq');
});

module.exports = router;
