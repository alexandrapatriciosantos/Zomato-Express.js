const express = require('express');

const router = express.Router();
const { getContact } = require('../controllers/admin/admin-controller');

// const authenticateWithJwt = require('../services/jwt');

// restaurateurs

router.get('/', getContact);


module.exports = router;
