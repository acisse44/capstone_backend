const express = require("express");
const router = express.Router();

const { Quiz, QuizQuestion } = require("../db/models");

router.get("/", async (req, res, next) => {
  try {
    const allQuizzes = await Test.findAll();
    allQuizzes
      ? res.status(200).json(allQuizzes)
      : res.status(404).send("Quizzes Not Found");
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const quiz = await Quiz.findByPk(req.params.id, { include: QuizQuestion });
    quiz ? res.status(200).json(quiz) : res.status(404).send("Role Not Found");
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  const { languageID, quizName, difficulty, question } = req.body;
  try {
    const newQuiz = await Quiz.create({
      languageID,
      quizName,
      difficulty,
      question,
    });
    if (question && question.length > 0) {
      await QuizQuestion.bulkCreate(
        question.map((q) => ({
          quizID: newQuiz.quizID,
          question: q.question,
          quizChoice: q.quizChoice,
          correctChoice: q.correctChoice,
          userScore: q.userScore,
          pointWorth: q.pointWorth,
        }))
      );
    }
    newQuiz
      ? res.status(200).json(newQuiz)
      : res.status(404).send("Unsuccessful In Adding Quiz");
  } catch (error) {
    next(error);
  }
});

router.put("/", async (req, res, next) => {
  const { languageID, quizName, difficulty, question } = req.body;
  try {
    const quiz = await Quiz.findByPk(req.params.id);
    if (!quiz) {
      return res.status(404).send("Test not found");
    }
    quiz.languageID = languageID;
    quiz.quizName = quizName;
    quiz.difficulty = difficulty;
    await quiz.save();
    await QuizQuestion.destroy({ where: { id: req.params.id } });

    if (question && question.length > 0) {
      await QuizQuestion.bulkCreate(
        question.map((q) => ({
          quizID: newQuiz.quizID,
          question: q.question,
          quizChoice: q.quizChoice,
          correctChoice: q.correctChoice,
          userScore: q.userScore,
          pointWorth: q.pointWorth,
        }))
      );
    }
    res.json(quiz);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const quiz = await Quiz.destroy({ where: { id: req.params.id } });
    quiz
      ? res.status(200).send("Successfully removed")
      : res.status(404).send("Test Not Found");
  } catch (error) {
    next(error);
  }
});

module.exports = router;
