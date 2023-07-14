const express = require("express");
const router = express.Router();
const { Quiz } = require("../db/models");

router.get("/", async (request, response, next) => {
  try {
    const allQuizs = await Quiz.findAll({});
    response.status(200).json(allQuizs);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (request, response, next) => {
  try {
    const quiz = await Quiz.findByPk(request.params.id);
    quiz
      ? response.status(200).json(quiz)
      : response.status(404).send("Quiz Not Found");
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const newQuiz = await Quiz.create(req.body);
    newQuiz
      ? res.status(200).json(newQuiz)
      : res.status(404).send("Unsuccessful In Adding Quiz");
  } catch (error) {
    next(error);
  }
});


router.delete("/:id", async (req, res, next) => {
  try {
    const Quiz = await Quiz.destroy({ where: { id: req.params.id } });
    Quiz
      ? res.status(200).send("Successfully removed")
      : res.status(404).send("Quiz Not Found");
  } catch (error) {
    next(error);
  }
});

module.exports = router;
