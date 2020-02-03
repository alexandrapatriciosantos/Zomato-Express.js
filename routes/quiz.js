const express = require("express");
const { authenticateWithJwt } = require("../services/jwt");
const { postQuizResult } = require("../controllers/quiz-results-controller");

const router = express.Router();

router.get("/", authenticateWithJwt, (req, res) => res.json({ hey: "hey" }));

router.get("/:id/question/:questionid", (req, res) => {
  // how to make sure this is a sub of quiz??
  res.send("quiz/:id - on quiz");
});

router.get("/results", (req, res) => {
  res.send("quiz/results");
});

router.post("/postresult", postQuizResult);

module.exports = router;
