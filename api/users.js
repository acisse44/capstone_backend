// const router = require("express").Router();
const express = require("express");
const router = express.Router();
const { User, Friendship } = require("../db/models");
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
router.get("/friends/:id", async (request, response, next) => {
  // try {
  //   const allFriends = await Friendship.findAll({
  //     include: [
  //       {
  //         model: User,
  //         as: "userId1",
  //       },
  //       {
  //         model: User,
  //         as: "userId2",
  //       },
  //     ],
  //   });
  //   response.status(200).json(allFriends);
  // } catch (error) {
  //   next(error);
  // }
  try {
    const { id} = request.params;
    const usersFriends = await Friendship.findAll({
      where: { userId1: id},
    });
    usersFriends ? response.status(200).json(usersFriends) : response.status(404).send("User Not Found");
  } catch (error) {
    next(error);
  }
});

//add friend
router.post("/addfriend", async (request, response, next) => {
  const { userId1, userId2 } = request.body;
  try {
    const friendship = await Friendship.create({
      userId1,
      userId2,
      accepted: "false"
    });

    response.status(201).json(friendship);
  } catch (error) {
    next(error);
  }
});


//accept friend request
router.put("/updatefriend/:id", async (request, response, next) => {
  const { id } = request.params;
  const { accepted } = request.body;

  try {
    const friendToUpdate = await Friendship.findByPk(id);
    if (!friendToUpdate) {
      return response.status(404).send("Friend Not Found");
    }

    await friendToUpdate.update({ accepted });
    response.status(200).json(friendToUpdate);
  } catch (error) {
    next(error);
  }
});

//delete a friend
router.delete("/deletefriend/:id/:friendId", async (request, response, next) => {
  const { id } = request.params; //getting the id from the parameter list

  const { friendId} = request.params;
   
  try {  //find the friend we want to delete by id
    const friendToDelete = await Friendship.findOne({
      where: { userId1: id} ,
      where: {userId2: friendId}, 
    });

    if (!friendToDelete) {
      return response.status(404).send("Friend Not Found");
    }
    //then we delete
    await friendToDelete.destroy();
    response.status(200).send("Deleted Successfully");
  } catch (error) {
    next(error);
  }
});



module.exports = router;
