const express = require("express");
const router = express.Router();
const { Achievement, User, UserAchievement } = require("../db/models");

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

router.post("/:userId/unlock/:achievementId", async (req, res, next) => {
  try {
    const { userId, achievementId } = req.params;
    const user = await User.findByPk(userId);
    const achievement = await Achievement.findByPk(achievementId);

    if (!user || !achievement) {
      return res.status(404).send("User or Achievement not found");
    }

    // Check if the user already unlocked the achievement
    const userAchievement = await UserAchievement.findOne({
      where: {
        userId,
        achievementId,
      },
    });

    if (userAchievement) {
      return res.status(400).send("Achievement already unlocked");
    }

    if (user.points < achievement.pointsRequirement) {
      return res
        .status(400)
        .send("Not enough points to unlock the achievement");
    }

    // Create a new row in the UserAchievement table to represent the unlocked achievement
    await UserAchievement.create({
      userId,
      achievementId,
    });

    await achievement.update({ isUnlocked: true });

    res.status(200).json({ message: "Achievement unlocked successfully" });
  } catch (error) {
    next(error);
  }
});


module.exports = router;