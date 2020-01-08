const express = require('express');
const { createUser } = require('../controllers/auth-controller');
const router = express.Router();


router.route('/signup')
    .get((req, res) => {
        res.send('signup')
    })

router.post('/signup', createUser /*login after*/);

router.route('/login')
    .get((req, res) => {
        res.send('login')
    })
//      .post('/login',(req, res) => { 
//         res
//  });

module.exports = router;