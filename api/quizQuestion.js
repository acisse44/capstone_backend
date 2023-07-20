const express = require("express");
const router = express.Router();
const { QuizQuestion } = require("../db/models");

router.get("/", async (request, response, next) => {
  try {
    const allQuizQuestions = await QuizQuestion.findAll({});
    response.status(200).json(allQuizQuestions);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (request, response, next) => {
  try {
    const quizQuestion = await QuizQuestion.findByPk(request.params.id);
    quizQuestion
      ? response.status(200).json(quizQuestion)
      : response.status(404).send("QuizQuestion Not Found");
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  console.log("req.body", req.body);
  try {
    const newQuizQuestion = await QuizQuestion.create(req.body);
    newQuizQuestion
      ? res.status(200).json(newQuizQuestion)
      : res.status(404).send("Unsuccessful In Adding QuizQuestion");
  } catch (error) {
    next(error);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const quizQuestionId = req.params.id;
    const [rowsUpdated, [updatedQuiz]] = await QuizQuestion.update(req.body, {
      returning: true,
      where: { id: quizQuestionId },
    });
    updatedQuiz
      ? res.status(200).json(updatedQuiz)
      : res.status(404).send("Quiz not found");
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const quizQuestion = await QuizQuestion.destroy({
      where: { id: req.params.id },
    });
    quizQuestion
      ? res.status(200).send("Successfully removed")
      : res.status(404).send("TestQuestion Not Found");
  } catch (error) {
    next(error);
  }
});

module.exports = router;
