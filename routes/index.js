const express = require('express');
const router = express.Router();
// const authenticateWithJwt = require('../services/jwt');

//all
router.get('/',(req, res) =>{
    res.send('homepage')
});

// router.get('/users', authenticateWithJwt);

//restaurateurs 

router.get('/quiz',(req, res) =>{
    res.send('quiz - list')
});

router.get('/quiz/:id/question/:questionid',(req, res) =>{ // how to make sure this is a sub of quiz?? 
    res.send('quiz/:id - on quiz')
});

router.get('/quiz/results',(req, res) =>{
    res.send('quiz/results')
});

router.get('/contact',(req, res) =>{  
    res.send('contact')
});

router.get('/faq',(req, res) =>{
    res.send('faq')
});

router.get('/documentation',(req, res) =>{
    res.send('documentation - list')
})

router.get('/documentation/:title',(req, res) =>{
    res.send('documentation - title, e.g. documentation/health')
})

module.exports = router;
