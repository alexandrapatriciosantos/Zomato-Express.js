const Question = require('../../models/Question');
const Answer = require('../../models/Answer');
const Quiz = require('../../models/Quiz');

const createQuiz = (req, res, next) => {
  Quiz.create(req.body, (err) => {
    if (err) return next(err);
    return res.sendStatus(200);
  });
};

const getAllQuizzes = (req, res, next) => {
  Quiz.getAll((err, results) => {
    console.log(results);
    if (err) return next(err);
    let newArr = [];
    results.forEach((item) => {
      if (newArr.find((el) => el.id === item.id)) {
        // go through entire array, add staff member to this rest
        newArr = newArr.map((el) => {
          item.questions.forEach((joke) => {
            if (el.id === item.id) {
              return ({
                ...el,
                questions: [
                  ...el.question,
                  {
                    question: item.question,
                    correct_answer: item.correct_answer,
                    ...joke,
                    answer: [
                      ...joke.answer,
                      { answer_option: joke.answer_option }],
                  }],
              });
            }
            return el;
          });
        });
      } else {
        // add new rest with single staff member
        newArr.push({
          id: item.id,
          name: item.name,
          user_type: item.user_type_id,
          language: item.language_id,
          product: item.product_id,
          question: [{
            question: item.question,
            correct_answer: item.correct_answer,
          }],
        });
      }
    });
    console.log(newArr);
    return res.json({ quiz: newArr });
  });
};


const editQuiz = (req, res, next) => {
  Quiz.edit(req.body, (err) => {
    if (err) return next(err);
    return res.sendStatus(200);
  });
};

const deleteQuiz = (req, res, next) => {
  Quiz.delete(req.body, (err) => {
    if (err) return next(err);
    return res.json({ message: 'Quiz deleted' });
  });
};

const createQuestion = (req, res, next) => {
  Question.create(req.body, (err, results) => {
    if (err) return next(err);
    req.question_id = results.insertId;

    next();
  });
};

const createAnswers = (req, res, next) => {
  const { question_id } = req;
  const createdAnswers = [];

  req.body.answer_options.forEach((answer_option) => {
    Answer.create(answer_option, question_id, (err, results) => {
      if (err) return next(err);
      createdAnswers.push({
        id: results.insertId,
        answer_option,
      });
      if (createdAnswers.length === req.body.answer_options.length) {
        req.createdAnswers = createdAnswers;
        next();
      }
    });
  });
};

const addCorrectAnswer = (req, res, next) => {
  const questionId = req.question_id;
  const correctAnswer = req.createdAnswers.find((ans) => {
    if (ans.answer_option === req.body.correct_answer) {
      return req.body.correct_answer;
    }
  });

  Question.correctAnswer(correctAnswer, questionId, (err) => {
    if (err) return next(err);
    return res.sendStatus(200);
  });
};

const editQuestion = (req, res, next) => {
  Question.edit(req.body, (err) => {
    if (err) return next(err);
    return res.sendStatus(200);
  });
};

const deleteQuestion = (req, res, next) => {
  Question.delete(req.body, (err) => {
    if (err) return next(err);
    return res.json({ message: 'Question deleted' });
  });
};

const getAllQuestions = (req, res, next) => {
  Question.getAll((err, results) => {
    if (err) return next(err);
    return res.json({ questions: results });
  });
};

const getAllAnswers = (req, res, next) => {
  Answer.getAll((err, results) => {
    if (err) return next(err);
    return res.json({ answers: results });
  });
};
const createAnswer = (req, res, next) => {
  Answer.create(req.body, (err) => {
    if (err) return next(err);
    return res.sendStatus(200);
  });
};

const editAnswer = (req, res, next) => {
  Answer.edit(req.body, (err) => {
    if (err) return next(err);
    return res.sendStatus(200);
  });
};

const deleteAnswer = (req, res, next) => {
  Answer.delete(req.body, (err) => {
    if (err) return next(err);
    return res.sendStatus(200);
  });
};

module.exports = {
  createQuiz,
  getAllQuizzes,
  editQuiz,
  deleteQuiz,
  createAnswer,
  getAllAnswers,
  editAnswer,
  deleteAnswer,
  createQuestion,
  editQuestion,
  deleteQuestion,
  getAllQuestions,
  createAnswers,
  addCorrectAnswer,
};
