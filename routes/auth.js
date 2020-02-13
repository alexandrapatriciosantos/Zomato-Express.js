const express = require('express');
const { getBrowserLang } = require('../controllers/language-controller');
const { createUser, loginUser, checkIfEmailExists, loginAdmin } = require('../controllers/auth-controller');


const router = express.Router();

router.post('/signup', getBrowserLang, checkIfEmailExists, createUser);

router.post('/login', getBrowserLang, loginUser);

router.post('/loginadim', loginAdmin);

module.exports = router;
