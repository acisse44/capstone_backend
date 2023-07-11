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

module.exports = router;