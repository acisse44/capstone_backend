// const router = require("express").Router();
const express = require("express");
const router = express.Router();
const { User } = require("../db/models");
const bodyParser = require("body-parser");


//Get all users
router.get("/allUsers", async (req, res, next) => {
  try {
    const allUsers = await User.findAll({ attributes: ["id", "email"] });
    res.status(200).json(allUsers);
  } catch (error) {
    next(error);
  }
});

//Get user by id
router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await User.findByPk(id)

    user
      ? res.status(200).json(user)
      : res.status(404).send("user not Found");
  } catch (error) {
    console.log(error);
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

router.put("/updateAvatar/:id",  bodyParser.json(), async (req, res, next) => {
  try { 
    const { id } = req.params;
    const user = await User.findByPk(id);

    if (user) {
      await user.update({ avatarId: req.body.avatarId });
      res.status(200).json(user);
    } else {
      res.status(404).send("Unsuccessful in updating Avatar");
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


//get friends
router.get("/friends/:userId", async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    const friends = await Promise.all(
      user.followings.map((friendId) => {
        return User.findById(friendId);
      })
    );
    let friendList = [];
    friends.map((friend) => {
      const { _id, username, profilePicture } = friend;
      friendList.push({ _id, username, profilePicture });
    });
    res.status(200).json(friendList)
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
