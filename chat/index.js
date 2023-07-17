const router = require("express").Router();

router.get("/", (req, res, next) => {
    res.sendFile('/Users/aminatacisse/capstone_backend/chat/index.html'); 
});


module.exports = router; 