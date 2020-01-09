const express = require('express');
const router = express.Router();
const { createQuiz, getAllQuizzes } = require('../controllers/quiz-controller');


router.get('/quiz', getAllQuizzes);

router.post('/create/quiz', createQuiz); 

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