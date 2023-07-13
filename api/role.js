const express = require("express");
const router = express.Router();

const { Role } = require("../db/models");

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

router.put("/", async (req, res, next) => {
  try {
    const updateRole = await Role.update(req.body, {
      where: { id: req.params.id },
      returning: true,
    });
    updateRole
      ? res.status(200).json("Role edited successfully")
      : res.status(404).send("Role Not Found");
  } catch (error) {
    next(error);
  }
});

module.exports = router;
