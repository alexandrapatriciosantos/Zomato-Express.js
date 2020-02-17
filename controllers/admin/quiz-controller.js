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
    if (err) return next(err);
    req.quizzes = results;
    next();
  });
};

const getAllQuizzesByLanguageId = (req, res, next) => {
  Quiz.getAllByLanguageId(req.languageId, (err, results) => {
    if (err) return next(err);
    req.quizzes = results;
    next();
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
    req.questions = results;
    next();
  });
};

const getAllAnswers = (req, res, next) => {
  Answer.getAll((err, results) => {
    if (err) return next(err);
    req.answers = results;
    next();
  });
};

const createAnswer = (req, res, next) => {
  Answer.create(req.body, (err) => {
    if (err) return next(err);
    return res.sendStatus(200);
  });
};

const editAnswer = (req, res, next) => {
  // for(i=0, i<4, i++) {
  Answer.edit(req.body, (err) => {
    if (err) return next(err);
    return res.sendStatus(200);
  });
  // }
};

const deleteAnswer = (req, res, next) => {
  Answer.delete(req.body, (err) => {
    if (err) return next(err);
    return res.sendStatus(200);
  });
};

const sendQuizzes = (req, res, next) => {
  const questionsWithAnswers = req.questions.map((que) => {
    const answers = req.answers.filter((ans) => ans.question_id === que.id);
    return {
      ...que,
      answers,
    };
  });
  const quizzesWithAnswers = req.quizzes.map((quiz) => {
    const questions = questionsWithAnswers.filter((final) => final.quiz_id === quiz.id);
    return {
      ...quiz,
      questions,
    };
  });
  return res.json({
    quizzes: quizzesWithAnswers,
  });
};


module.exports = {
  sendQuizzes,
  createQuiz,
  getAllQuizzes,
  getAllQuizzesByLanguageId,
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
