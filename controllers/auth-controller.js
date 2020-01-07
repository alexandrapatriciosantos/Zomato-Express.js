const createUser = (res, req, next) => {
    User.create(req.body, (err, results, fields) => {
        if(err) return res.render('error', {err})

        res.redirect('auth/login');
    })
}

module.exports = { createUser };