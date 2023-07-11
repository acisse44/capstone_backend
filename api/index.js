const router = require("express").Router();

router.use("/role", require("./role"));

//404 Handling
router.use((req, res, next) => {
  const error = new Error("404 Not found");
  error.status = 404;
  next(error);
});

module.exports = router;
