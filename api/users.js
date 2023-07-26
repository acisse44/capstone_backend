// const router = require("express").Router();
const express = require("express");
const router = express.Router();
const { User, Friendship, Achievement } = require("../db/models");
const bodyParser = require("body-parser");
const { Op } = require("sequelize");


//Get all users
router.get("/allUsers", async (req, res, next) => {
  try {
    const allUsers = await User.findAll({ attributes: ["id", "email", "username", "points", "avatarId"] });
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

//get friends of user with id
router.get("/friends/:id", async (request, response, next) => {
  try {
    const { id } = request.params;
    const usersFriends = await Friendship.findAll({
      where: {[Op.or]: [
        { userId1: id, accepted: true },
        { userId2: id, accepted: true },
      ],
    },
      // { userId1: id, userId2: id, accepted: true},
    });
    usersFriends ? response.status(200).json(usersFriends) : response.status(404).send("User Not Found");
  } catch (error) {
    next(error);
  }
});

//add friend 
router.post("/addfriend/:userId1/:userId2", async (request, response, next) => {
  const { userId1, userId2 } = request.params;
  try {
    const searchExist = await Friendship.findOne({
      where: { userId1: userId1, userId2: userId2}
    });
    if(searchExist===null){
      console.log("condition hit");
      const friendship = await Friendship.create({
        userId1,
        userId2,
        accepted: "false"
      });
      response.status(201).json(friendship);
    }
  } catch (error) {
    next(error);
  }
});


//accept friend request 
router.put("/acceptrequest/:userId1/:userId2/:accepted", async (request, response, next) => {
  const { userId1, userId2, accepted } = request.params;
  console.log("new update friend " + userId1, userId2, accepted);

  try {
    const friendToUpdate = await Friendship.findOne({
      where: {
        [Op.or]: [
          { userId1, userId2, accepted: false },
          { userId1: userId2, userId2: userId1, accepted: false },
        ],
      },
    });

    if (!friendToUpdate) {
      console.log("Friend Not Found or Already Friends");
      return response.status(404).send("Friend Not Found");
    }

    await friendToUpdate.update({ accepted });
    response.status(200).json(friendToUpdate);
  } catch (error) {
    next(error);
  }
});

router.delete("/declinefriend/:id/:friendId/:accepted", async (request, response, next) => {
  const { id, friendId, accepted } = request.params;
   
  try {  //find the friend we want to delete by id
    const friendToDelete = await Friendship.findOne({
      where: {
        [Op.or]: [
          { userId1: id,  userId2: friendId, accepted: false},
          { userId1: friendId, userId2: id, accepted: false},
        ],
      },
      
    });

    if (!friendToDelete) {
      return response.status(404).send("Friend Not Found");
    }
    //then we delete
    await friendToDelete.destroy();
    response.status(200).send("Declined request Successfully");
  } catch (error) {
    next(error);
  }
});


//delete a friend - delete request 
router.delete("/deletefriend/:id/:friendId", async (request, response, next) => {
  const { id, friendId } = request.params; //getting the id from the parameter list
   
  try {  //find the friend we want to delete by id
    const friendToDelete = await Friendship.findOne({
      // where: { userId1: id, userId2: friendId } ,
      where: {
        [Op.or]: [
          { userId1: id,  userId2: friendId },
          { userId1: friendId, userId2: id},
        ],
      },
      
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

// GET unlocked achievements for a user
router.get("/:userId/achievements", async (req, res, next) => {
  try {
    const userId = req.params.userId;
    const user = await User.findByPk(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const unlockedAchievements = await Achievement.findAll({
      include: [
        {
          model: User,
          through: { attributes: [] }, // Exclude join table attributes from the result
          where: { id: userId },
        },
      ],
    });

    res.status(200).json(unlockedAchievements);
  } catch (error) {
    next(error);
  }
});

//get friend requests
router.get("/friendrequests/:id", async (request, response, next) => {
  try {
    const { id } = request.params;
    const usersFriends = await Friendship.findAll({
      where: { userId2: id, accepted: false},
    });
    usersFriends ? response.status(200).json(usersFriends) : response.status(404).send("User Not Found");
  } catch (error) {
    next(error);
  }
});

module.exports = router;
