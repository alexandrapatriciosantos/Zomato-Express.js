const QuizResults = require("../models/Results");

const postQuizResult = (req, res, next) => {
  QuizResults.postResult(req.body, err => {
    if (err) return next(err);
    return res.sendStatus(200);
  });
};

module.exports = { postQuizResult };
