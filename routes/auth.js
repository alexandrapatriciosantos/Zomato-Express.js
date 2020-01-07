const express = require('express');
const { createUser } = require('../controllers/auth-controller');
const router = express.Router();

router.Router('/signup')
    .get((req, res) =>{
        res.send('signup')
    })
    .post('/signup', createUser, /*login after*/)

router.Router('/login')
    .get((req, res) =>{
        res.send('/login')
    })
    .post('/login',(req, res) =>{
    });

module.exports = router;