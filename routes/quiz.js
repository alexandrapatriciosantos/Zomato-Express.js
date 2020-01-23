const express = require("express");
const { authenticateWithJwt } = require("../services/jwt");
const { getAllQuizzes } = require("../controllers/admin/quiz-controller");

const router = express.Router();

router.get("/", authenticateWithJwt, getAllQuizzes);

router.get("/:id/question/:questionid", (req, res) => {
  // how to make sure this is a sub of quiz??
  res.send("quiz/:id - on quiz");
});

router.get("/results", (req, res) => {
  res.send("quiz/results");
});

module.exports = router;
