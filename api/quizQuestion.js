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
  try {
    const newQuizQuestion = await QuizQuestion.create(req.body);
    newQuizQuestion
      ? res.status(200).json(newQuizQuestion)
      : res.status(404).send("Unsuccessful In Adding QuizQuestion");
  } catch (error) {
    next(error);
  }
});

router.put("/", async (req, res, next) => {
  try {
    const updateQuizQuestion = await QuizQuestion.update(req.body, {
      where: { id: req.params.id },
      returning: true,
    });
    updateQuizQuestion
      ? res.status(200).json("QuizQuestion edited successfully")
      : res.status(404).send("QuizQuestion Not Found");
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
