const express = require("express");
const router = express.Router();

const { Test, TestQuestion } = require("../db/models");

router.get("/", async (req, res, next) => {
  try {
    const allTests = await Test.findAll({});
    allTests
      ? res.status(200).json(allTests)
      : res.status(404).send("Tests Not Found");
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const test = await Test.findByPk(req.params.id, { include: TestQuestion });
    test ? res.status(200).json(test) : res.status(404).send("Test Not Found");
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  const { languageID, testName, difficulty, question } = req.body;
  try {
    const newTest = await Test.create({
      languageID,
      testName,
      difficulty,
      question,
    });
    if (question && question.length > 0) {
      await TestQuestion.bulkCreate(
        question.map((q) => ({
          testID: newTest.testID,
          question: q.question,
          testChoice: q.testChoice,
          correctChoice: q.correctChoice,
          userScore: q.userScore,
          pointWorth: q.pointWorth,
        }))
      );
    }
    newTest
      ? res.status(200).json(newTest)
      : res.status(404).send("Unsuccessful In Adding Test");
  } catch (error) {
    next(error);
  }
});

router.put("/", async (req, res, next) => {
  const { languageID, testName, difficulty, question } = req.body;
  try {
    const test = await Test.findByPk(req.params.id);
    if (!test) {
      return res.status(404).send("Test not found");
    }
    test.languageID = languageID;
    test.testName = testName;
    test.difficulty = difficulty;
    await test.save();
    await TestQuestion.destroy({ where: { id: req.params.id } });

    if (question && question.length > 0) {
      await TestQuestion.bulkCreate(
        question.map((q) => ({
          testID: test.testID,
          question: q.question,
          testChoice: q.testChoice,
          correctChoice: q.correctChoice,
          userScore: q.userScore,
          pointWorth: q.pointWorth,
        }))
      );
    }
    res.json(test);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const test = await Test.destroy({ where: { id: req.params.id } });
    test
      ? res.status(200).send("Successfully removed")
      : res.status(404).send("Test Not Found");
  } catch (error) {
    next(error);
  }
});

module.exports = router;
