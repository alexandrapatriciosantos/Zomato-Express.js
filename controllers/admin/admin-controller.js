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
    let newArr = [];
    results.forEach((item) => {
      const generatedStaffMember = {
        first_name: item.first_name,
        last_name: item.last_name,
        email: item.email,
        phone_number: item.phone_number,
      };

      if (newArr.find((el) => el.id === item.id)) {
        // go through entire array, add staff member to this rest
        newArr = newArr.map((el) => {
          if (el.id === item.id) {
            return ({
              ...el,
              staff: [
                ...el.staff,
                generatedStaffMember,
              ],
            });
          }

          return el;
        });
      } else {
        // add new rest with single staff member
        newArr.push({
          id: item.id,
          name: item.name,
          region: item.region_id,
          staff: [generatedStaffMember],
        });
      }
    });
    console.log(newArr);
    return res.json({ Restaurant: newArr });
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
  console.log('hola');
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
