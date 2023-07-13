const express = require("express");
const router = express.Router();
const { Achievement } = require("../db/models");

router.get("/", async (request, response, next) => {
    try {
        const allAchievements = await Achievement.findAll({ }); 
        response.status(200).json(allAchievements);
    } catch (error) {
        next(error);
    };
});

router.get("/:id", async (request, response, next) => {
    try {
      const achievement = await Achievement.findByPk(request.params.id);
      achievement
        ? response.status(200).json(achievement)
        : response.status(404).send("Role Not Found");
    } catch (error) {
      next(error);
    };
});

router.post("/", async (req, res, next) => {
  try {
    const newAchievement = await Achievement.create(req.body);
    newAchievement
      ? res.status(200).json(newAchievement)
      : res.status(404).send("Unsuccessful In Adding Achievement");
  } catch (error) {
    next(error);
  }
});

module.exports = router;