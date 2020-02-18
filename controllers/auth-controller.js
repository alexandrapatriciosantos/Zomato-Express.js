const User = require("../models/User");
const sendNodemailer = require("../services/nodemailer");
const { createToken } = require("../services/jwt");
const translations = require("../i18n/translations");

const isZomatoStaff = email => email.split("@")[1] === "@zomato";

const createUser = (req, res) => {
  let userTypeId;
  if (isZomatoStaff(req.body.email)) {
    userTypeId = 2;
  } else {
    userTypeId = 3;
  }
  User.create(req.body, userTypeId, err => {
    if (err) res.status(500).json({ flash: err.message });
    else
      res
        .status(201)
        .json({ flash: translations[req.language].Flash.userHasBeenSignedUp });
    sendNodemailer(req.body);
  });
};

const checkIfEmailExists = (req, res, next) => {
  User.findbyEmail(req.body.email, (err, user) => {
    if (err) return res.json({ error: err });

    if (user) {
      const statusCode = 409;
      return res.status(statusCode).json({
        flash: translations[req.language].Flash.emailAlreadyExists,
        status: statusCode
      });
    }

    return next();
  });
};

const loginUser = (req, res) => {
  User.findbyEmailandPassword(
    req.body.email,
    req.body.password,
    (err, user) => {
      if (err) return res.json({ error: err });
      if (!user)
        return res.json({
          flash: translations[req.language].Flash.EmailOrPasswordIsIncorrect
        });
      console.log(user);
      const token = createToken(user);
      return res.json({ user, token });
    }
  );
};

const loginAdmin = (req, res) => {
  User.findbyAdminEmailandPassword(
    req.body.email,
    req.body.password,
    (err, user) => {
      if (err) return res.json({ error: err });
      if (!user)
        return res.json({
          flash: translations[req.language].Flash.EmailOrPasswordIsIncorrect
        });

      const token = createToken(user);
      return res.json({ user, token });
    }
  );
};

module.exports = { createUser, loginUser, checkIfEmailExists, loginAdmin };
