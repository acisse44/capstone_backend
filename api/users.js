const express = require("express");
const router = express.Router();
const { User } = require("../db/models");

router.get("/allusers", async (request, response, next) => {
    try {
        const allUsers = await User.findAll({attributes: ["userID", "username"]}); 
        response.status(200).json(allUsers);
    } catch (error) {
        next(error);
    };
});

// router.post("/achievements", async (request, response, next) => {
//     try {
//         const 
//     } catch (error) {
//         next(error);
//     }
// });

module.exports = router;