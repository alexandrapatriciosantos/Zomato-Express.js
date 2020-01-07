const User = require('../models/User')

const createUser = (req, res, next) => {
    User.create(req.body, (err, results, fields) => { 
        console.log(err)
        if(err) next(err)
        //  return res.render('error', {err})

        res.redirect('/login');
    })
}

module.exports = { createUser };