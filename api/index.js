const router = require("express").Router();

//mount on api:
//router.use("/filename, require("./filename"));

router.use("/users", require("./users"));
router.use("/languages", require("./languages"));
router.use("/lessons", require("./lessons"));
//router.use("/friends", require("./friends"));
router.use("/achievements", require("./achievements"));
router.use("/role", require("./role"));
router.use("/quiz", require("./quiz"));
router.use("/quizQuestion", require("./quizQuestion"));
router.use("/test", require("./test"));
router.use("/testQuestion", require("./testQuestion"));
router.use("/avatars", require("./avatars"));



router.use((req, res, next) => {
  const error = new Error("404 Not Found");
  error.status = 404;
  next(error);
});

module.exports = router;
