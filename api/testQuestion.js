const express = require("express");
const router = express.Router();
const { TestQuestion } = require("../db/models");

router.get("/", async (request, response, next) => {
  try {
    const allTestQuestions = await TestQuestion.findAll({});
    response.status(200).json(allTestQuestions);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (request, response, next) => {
  try {
    const testQuestion = await TestQuestion.findByPk(request.params.id);
    testQuestion
      ? response.status(200).json(testQuestion)
      : response.status(404).send("TestQuestion Not Found");
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const newTestQuestion = await TestQuestion.create(req.body);
    newTestQuestion
      ? res.status(200).json(newTestQuestion)
      : res.status(404).send("Unsuccessful In Adding TestQuestion");
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const testQuestion = await TestQuestion.destroy({ where: { id: req.params.id } });
    testQuestion
      ? res.status(200).send("Successfully removed")
      : res.status(404).send("TestQuestion Not Found");
  } catch (error) {
    next(error);
  }
});

module.exports = router;
