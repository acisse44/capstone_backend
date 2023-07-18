const express = require("express");
const router = express.Router();
const { Avatar } = require("../db/models");

router.get("/", async (request, response, next) => {
    try {
        const allAvatars = await Avatar.findAll({ }); 
        response.status(200).json(allAvatars);
    } catch (error) {
        next(error);
    };
});

router.get("/:id", async (request, response, next) => {
    try {
      const avatar = await avatar.findByPk(request.params.id);
      avatar
        ? response.status(200).json(avatar)
        : response.status(404).send("Avatar Not Found");
    } catch (error) {
      next(error);
    };
});

module.exports = router;