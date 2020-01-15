const User = require('../models/User');
const Product = require('../models/Product');
const Results = require('../models/Quiz');
const Restaurant = require('../models/Restaurant');

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
};

const editUser = (req, res, next) => {
  User.edit(req.body, (err) => {
    if (err) return next(err);
    return res.sendStatus(200);
  });
};


const createProduct = (req, res, next) => {
  Product.create(req.body, (err) => {
    if (err) return next(err);
    return res.sendStatus(200);
  });
};
const editProduct = (req, res, next) => {
  Product.edit(req.body, (err) => {
    if (err) return next(err);
    return res.json({ Restaurant: results });
  });
};

const deleteProduct = (req, res, next) => {
  Product.delete(req.body, (err) => {
    if (err) return next(err);
    return res.json({ message: 'Product deleted' });
  });
};

const getAllRestaurants = (req, res, next) => {
  Restaurant.getAll((err, results) => {
    if (err) return next(err);
    return res.json({ Restaurant: results });
  });
};

const createRestaurant = (req, res, next) => {
  Restaurant.create(req.body, (err) => {
    if (err) return next(err);
    return res.sendStatus(200);
  });
};

const editRestaurant = (req, res, next) => {
  Restaurant.edit(req.body, (err) => {
    if (err) return next(err);
    return res.sendStatus(200);
  });
};

const deleteRestaurant = (req, res, next) => {
  Restaurant.delete(req.body, (err) => {
    if (err) return next(err);
    return res.json({ message: 'Quiz deleted' });
  });
};

const getAllResults = (req, res, next) => {
  Results.getAll((err, results) => {
    if (err) return next(err);
    return res.json({ Results: results });
  });
};

module.exports = {
  getAllUsers,
  deleteUser,
  editUser,
  createProduct,
  editProduct,
  deleteProduct,

  createRestaurant,
  getAllRestaurants,
  editRestaurant,
  deleteRestaurant,

  getAllResults,
};
