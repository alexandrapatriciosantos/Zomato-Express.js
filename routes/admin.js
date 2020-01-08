const express = require('express');
const router = express.Router();

router.get('/quiz',(req, res) =>{
    res.send('quiz - list')
});

router.get('/create/quiz',(req, res) =>{
    res.send('quiz - create')
});

router.get('/quiz/:id/edit',(req, res) =>{ // how to make sure this is a sub of quiz?? 
    res.send('quiz/:id - on quiz')
});

router.get('/quiz/:id/:questionid/edit',(req, res) =>{ 
    res.send('quiz/:id - on quiz')
});

router.get('/contact/edit',(req, res) =>{  
    res.send('contact')
});

router.get('/faq/edit',(req, res) =>{
    res.send('faq')
});

router.get('/documentation/edit',(req, res) =>{
    res.send('documentation - list')
})

router.get('/documentation/:title/edit',(req, res) =>{
    res.send('documentation - title')
})

module.exports = router;