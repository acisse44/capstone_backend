const express = require("express");
const router = express.Router();
const { Friend , User} = require("../db/models");


router.get("/", async (request, response, next) => {
    try {
        const allFriends = await Friend.findAll({ include: User }); 
        response.status(200).json(allFriends);
    } catch (error) {
        next(error);
    };
});

router.get("/:id", async (request, response, next) => {
    try {
      const friend = await Friend.findByPk(request.params.id);
      friend
        ? response.status(200).json(friend)
        : response.status(404).send("Friend Not Found");
    } catch (error) {
      next(error);
    };
});

router.delete("/deletefriend/:id", async (request, response, next) => {
    const { id } = request.params; //getting the id from the parameter list
    try {
      //find the friend we want to delete by id
      const friendToDelete = await Friend.findByPk(id);
      //then we delete
      await friendToDelete.destroy();
      response.status(201).send("Deleted Successful");
    } catch (error) {
      console.log(error);
      next(error);
    };
});


module.exports = router;