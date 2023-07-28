const express = require("express");
const router = express.Router();
const { Test } = require("../db/models");

router.get("/", async (request, response, next) => {
  try {
    const allTests = await Test.findAll({});
    response.status(200).json(allTests);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (request, response, next) => {
  try {
    const test = await Test.findByPk(request.params.id);
    test
      ? response.status(200).json(test)
      : response.status(404).send("Test Not Found");
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const newTest = await Test.create(req.body);
    newTest
      ? res.status(200).json(newTest)
      : res.status(404).send("Unsuccessful In Adding Test");
  } catch (error) {
    next(error);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const testId = req.params.id;
    const [rowsUpdated, [updatedTest]] = await Test.update(req.body, {
      returning: true,
      where: { id: testId },
    });
    updatedTest
      ? res.status(200).json(updatedTest)
      : res.status(404).send("Test not found");
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

router.put("/markCompleted/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const test = await Test.findByPk(id);

    if (!test) {
      return res.status(404).send("Test not found");
    }
    test.completed = true;
    await test.save();
    res.status(200).json(test);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
