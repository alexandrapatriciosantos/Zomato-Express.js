const User = require('../models/User');
const sendNodemailer = require('../services/nodemailer');
const { createToken } = require('../services/jwt');

const isZomatoStaff = (email) => email.split('@')[1] === '@zomato';

const createUser = (req, res) => {
  let userTypeId;
  if (isZomatoStaff(req.body.email)) {
    userTypeId = 2;
  } else {
    userTypeId = 3;
  }
  User.create(req.body, userTypeId, (err) => {
    if (err) res.status(500).json({ flash: err.message });
    else res.status(200).json({ flash: 'User has been signed up!' });
    sendNodemailer(req.body);
  });
};

const checkIfEmailExists = (req, res, next) => {
  User.findbyEmail(req.body.email, (err, user) => {
    if (err) return res.json({ error: err });
    if (user) return res.json({ flash: 'Email already exists' });
    return next();
  });
};

const loginUser = (req, res) => {
  User.findbyEmailandPassword(req.body.email, req.body.password, (err, user) => {
    if (err) return res.json({ error: err });
    if (!user) return res.json({ flash: 'Email or password is incorrect' });

    const token = createToken(user);
    return res.json({ user, token });
  });
};


module.exports = { createUser, loginUser, checkIfEmailExists };
