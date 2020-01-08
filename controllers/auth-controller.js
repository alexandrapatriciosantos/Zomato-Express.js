const User = require('../models/User');
const sendNodemailer = require('../services/nodemailer');


const createUser = (req, res, next) => {
    User.create(req.body, (err, results, fields) => { 
        if(err) return res.render('error', {err})
        res.redirect('/auth/login');
        sendNodemailer(req.body);
    })
}

module.exports = { createUser };