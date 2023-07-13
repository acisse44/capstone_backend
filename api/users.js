const router = require("express").Router();
const { User } = require("../db/models");

//Get all users
router.get("/", async (request, response, next) => {
  try {
    const allUsers = await User.findAll({ attributes: ["id", "email"] });
    response.status(200).json(allUsers);
  } catch (error) {
    next(error);
  }
});

//Get user by email
router.get("/:email", async (req, res, next) => {
  try {
    const user = await User.findAll({
      where: { email: req.params.email },
    });
    user ? res.status(200).json(user) : res.status(404).send("User Not Found");
  } catch (error) {
    next(error);
  }
});

//Create user
router.post("/", async (req, res, next) => {
  try {
    const newUser = await User.create(req.body);
    newUser
      ? res.status(200).json(newUser)
      : res.status(404).send("Unsuccessful In Adding User");
  } catch (error) {
    next(error);
  }
});

//Update user
router.put("/:email", async (req, res, next) => {
  try {
    const user = await User.findOne({
      where: { email: req.params.email },
    });
    if (user) {
      await user.update({ password: req.body.password });
      res.status(200).json(user);
    } else {
      res.status(404).send("Unsuccessful in updating User");
    }
  } catch (error) {
    next(error);
  }
});

//delete user
router.delete("/:email", async (req, res, next) => {
  try {
    const email = req.params.email;
    const deletedUser = await User.destroy({ where: { email } });

    if (deletedUser) {
      res.status(200).json("User deleted successfully");
    } else {
      res.status(404).send("User not found");
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
