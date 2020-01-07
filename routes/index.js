const express = require('express');
const router = express.Router();


//all
router.get('/',(req, res) =>{
    res.send('homepage')
});

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


// admin how to make sub routes 

router.get('/admin/quiz',(req, res) =>{
    res.send('quiz - list')
});

router.get('/admin/create/quiz',(req, res) =>{
    res.send('quiz - create')
});

router.get('/admin/quiz/:id/edit',(req, res) =>{ // how to make sure this is a sub of quiz?? 
    res.send('quiz/:id - on quiz')
});

router.get('/admin/quiz/:id/:questionid/edit',(req, res) =>{ 
    res.send('quiz/:id - on quiz')
});

router.get('/admin/contact/edit',(req, res) =>{  
    res.send('contact')
});

router.get('/admin/faq/edit',(req, res) =>{
    res.send('faq')
});

router.get('/admin/documentation/edit',(req, res) =>{
    res.send('documentation - list')
})

router.get('/admin/documentation/:title/edit',(req, res) =>{
    res.send('documentation - title')
})


module.exports = router;
