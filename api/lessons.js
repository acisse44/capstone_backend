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

module.exports = router;