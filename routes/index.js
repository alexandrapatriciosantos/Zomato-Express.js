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

router.get('/documentation', (req, res) => {
  res.send('documentation - list');
});

router.get('/documentation/:title', (req, res) => {
  res.send('documentation - title, e.g. documentation/health');
});

module.exports = router;
