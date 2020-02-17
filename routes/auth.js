const express = require('express');
const {
  createUser, loginUser, checkIfEmailExists, loginAdmin,
} = require('../controllers/auth-controller');


const router = express.Router();

router.post('/signup', checkIfEmailExists, createUser);

router.post('/login', loginUser);

router.post('/loginadim', loginAdmin);

module.exports = router;
