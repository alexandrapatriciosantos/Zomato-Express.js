const User = require('../models/User');
const sendNodemailer = require('../services/nodemailer');
const { createToken } = require('../services/jwt');

const createUser = (req, res, next) => {
    User.create(req.body, (err, results, fields) => { 
        if(err) return res.render('error', {err})  // Why do we use render here and not json
        res.redirect('/auth/login');
        sendNodemailer(req.body);
    })
};

const loginUser = (req, res, next ) => {
    User.findbyEmailandPassword(req.body.email, req.body.password, (err, user, fields) => {
        if(err) return res.json({error: err});
        if (!user) return res.json({error: 'Email or password is incorrect'});

        const token = createToken(user);
        res.json({user, token});
    })
};


module.exports = { createUser, loginUser };