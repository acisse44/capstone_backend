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

router.post("/", async (req, res, next) => {
  try {
    const newLanguage = await Language.create(req.body);
    newLanguage
      ? res.status(200).json(newLanguage)
      : res.status(404).send("Unsuccessful In Adding Language");
  } catch (error) {
    next(error);
  }
});

router.put("/", async (req, res, next) => {
  try {
    const updateLanguage = await Language.update(req.body, {
      where: { id: req.params.id },
      returning: true,
    });
    updateLanguage
      ? res.status(200).json("Language edited successfully")
      : res.status(404).send("Language Not Found");
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const language = await Language.destroy({ where: { id: req.params.id } });
    language
      ? res.status(200).send("Successfully removed")
      : res.status(404).send("Language Not Found");
  } catch (error) {
    next(error);
  }
});

module.exports = router;