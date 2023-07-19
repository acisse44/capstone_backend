const express = require("express");
const router = express.Router();
const { Lesson } = require("../db/models");

router.get("/", async (request, response, next) => {
    try {
        const allLessons = await Lesson.findAll({ }); 
        response.status(200).json(allLessons);
    } catch (error) {
        next(error);
    };
});

router.get("/:id", async (request, response, next) => {
    try {
      const lesson = await Lesson.findByPk(request.params.id);
      lesson
        ? response.status(200).json(lesson)
        : response.status(404).send("Lesson Not Found");
    } catch (error) {
      next(error);
    };
});
router.post("/", async (req, res, next) => {
  try {
    const newLesson = await Lesson.create(req.body);
    newLesson
      ? res.status(200).json(newLesson)
      : res.status(404).send("Unsuccessful In Adding Lesson");
  } catch (error) {
    next(error);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const lessonId = req.params.id;
    const [rowsUpdated, [updatedLesson]] = await Lesson.update(req.body, {
      returning: true,
      where: { id: lessonId },
    });
    updatedLesson
      ? res.status(200).json(updatedLesson)
      : res.status(404).send("lesson not found");
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const Lesson = await Lesson.destroy({ where: { id: req.params.id } });
    Lesson
      ? res.status(200).send("Successfully removed")
      : res.status(404).send("Lesson Not Found");
  } catch (error) {
    next(error);
  }
});

module.exports = router;