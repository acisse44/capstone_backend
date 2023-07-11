const express = require("express");
const router = express.Router();
const { Language } = require("../db/models");

router.get("/", async (request, response, next) => {
    try {
        const allLanguages = await Language.findAll({ }); 
        response.status(200).json(allLanguages);
    } catch (error) {
        next(error);
    };
});

router.get("/:id", async (request, response, next) => {
    try {
      const language = await Language.findByPk(request.params.id);
      language
        ? response.status(200).json(language)
        : response.status(404).send("Language Not Found");
    } catch (error) {
      next(error);
    };
});


module.exports = router;