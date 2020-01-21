const User = require('../../models/User');
const User_Type = require('../../models/User_Type');
const Product = require('../../models/Product');
const Results = require('../../models/Quiz');
const Restaurant = require('../../models/Restaurant');
const Region = require('../../models/Region');
const Contact = require('../../models/Contact');


const getAllUsers = (req, res, next) => {
  User.getAll((err, results) => {
    if (err) return next(err);
    return res.json({ users: results });
  });
};

const getAllUserTypes = (req, res, next) => {
  User_Type.getAll((err, results) => {
    if (err) return next(err);
    return res.json({ user_type: results });
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
    return res.sendStatus(200);
  });
};

const deleteProduct = (req, res, next) => {
  Product.delete(req.body, (err) => {
    if (err) return next(err);
    return res.json({ message: 'Product deleted' });
  });
};
const createRegion = (req, res, next) => {
  Region.create(req.body, (err) => {
    if (err) return next(err);
    return res.sendStatus(200);
  });
};
const editRegion = (req, res, next) => {
  Region.edit(req.body, (err) => {
    if (err) return next(err);
    return res.sendStatus(200);
  });
};

const deleteRegion = (req, res, next) => {
  Region.delete(req.body, (err) => {
    if (err) return next(err);
    return res.json({ message: 'Region deleted' });
  });
};

const getAllRegions = (req, res, next) => {
  Region.getAll((err, results) => {
    if (err) return next(err);
    return res.json({ Region: results });
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

const getContact = (req, res, next) => {
  Contact.getAll((err, results) => {
    if (err) return next(err);
    return res.json({ Contact: results });
  });
};


module.exports = {
  getAllUsers,
  getAllUserTypes,
  deleteUser,
  editUser,
  createProduct,
  editProduct,
  deleteProduct,
  createRegion,
  editRegion,
  deleteRegion,
  getAllRegions,
  createRestaurant,
  getAllRestaurants,
  editRestaurant,
  deleteRestaurant,
  getAllResults,
  getContact,
};
