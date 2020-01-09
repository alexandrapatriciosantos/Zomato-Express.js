const User = require('../models/User');

const getAllUsers = (req, res, next) => {
  User.getAll((err, results) => {
    if (err) return next(err);
    return res.json({ users: results });
  });
};

const deleteUser = (req, res, next) => {
  User.delete(req.body, (err) => {
    if (err) return next(err);
    return res.json({ message: 'user deleted' });
  });

const editUser = (req, res, next) => {
  User.edit(req.body, (err) => {
    if (err) return next(err);
    res.sendStatus(200);
  });
};

module.exports = {
  getAllUsers,
  deleteUser,
  editUser,
};