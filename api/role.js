const express = require("express");
const router = express.Router();

const { Role } = require("../db/models");

router.get("/", async (req, res, next) => {
  try {
    const allRoles = await Role.findAll({});
    allRoles
      ? res.status(200).json(allRoles)
      : res.status(404).send("Roles Not Found");
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const role = await Role.findByPk(req.params.id);
    role ? res.status(200).json(role) : res.status(404).send("Role Not Found");
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const newRole = await Role.create(req.body);
    newRole
      ? res.status(200).json(newRole)
      : res.status(404).send("Unsuccessful In Adding Role");
  } catch (error) {
    next(error);
  }
});

module.exports = router;
