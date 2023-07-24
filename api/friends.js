const express = require("express");
const router = express.Router();
const { Friendship, User } = require("../db/models");

router.get("/", async (request, response, next) => {
  try {
    const allFriends = await Friendship.findAll({
      include: [
        {
          model: User,
          as: "sender",
        },
        {
          model: User,
          as: "receiver",
        },
      ],
    });
    response.status(200).json(allFriends);
  } catch (error) {
    next(error);
  }
});

router.post("/addfriend", async (request, response, next) => {
  const { senderId, receiverId } = request.body;
  try {
    const friendship = await Friendship.create({
      status: "pending",
      senderId,
      receiverId,
    });

    response.status(201).json(friendship);
  } catch (error) {
    next(error);
  }
});

router.put("/updatefriend/:id", async (request, response, next) => {
  const { id } = request.params;
  const { status } = request.body;

  try {
    const friendToUpdate = await Friendship.findByPk(id);
    if (!friendToUpdate) {
      return response.status(404).send("Friend Not Found");
    }

    await friendToUpdate.update({ status });
    response.status(200).json(friendToUpdate);
  } catch (error) {
    next(error);
  }
});

router.delete("/deletefriend/:id", async (request, response, next) => {
  const { id } = request.params; //getting the id from the parameter list

  try {  //find the friend we want to delete by id
    const friendToDelete = await Friendship.findByPk(id);
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
