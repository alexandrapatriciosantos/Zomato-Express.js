const User = require('../models/User');
const sendNodemailer = require('../services/nodemailer');
const { createToken } = require('../services/jwt');

const createUser = (req, res) => {
  User.create(req.body, (err) => {
    if (err) return res.json({ error: err });
    res.sendStatus(200);
    sendNodemailer(req.body);
  });
};

const loginUser = (req, res) => {
  User.findbyEmailandPassword(req.body.email, req.body.password, (err, user) => {
    if (err) return res.json({ error: err });
    if (!user) return res.json({ error: 'Email or password is incorrect' });

    const token = createToken(user);
    console.log(createToken);
    return res.json({ user, token });
  });
};


module.exports = { createUser, loginUser };
