const express = require("express");
const { createUser, loginUser, checkIfEmailExists} = require("../controllers/auth-controller");

const router = express.Router();

router.post("/signup", checkIfEmailExists, createUser);

router.post("/login", loginUser);

module.exports = router;
