const express = require('express');
const { createUser, loginUser } = require('../controllers/auth-controller');
const { createToken, authenticateWithJwt } = require('../services/jwt');
const router = express.Router();

router.post('/signup', createUser);

router.post('/login', loginUser);
        // , createToken, authenticateWithJwt);

module.exports = router;