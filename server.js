require("dotenv").config();

const express = require("express");
const app = express();
// const session = require("express-session");
// const SequelizeStore = require("connect-session-sequelize")(session.Store);
// const passport = require("passport");
const cors = require("cors");
const db = require("./db");

// const { User } = require("./db/models");

// const sessionStore = new SequelizeStore({ db });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: process.env.FRONTEND_URL || `http://localhost:3000`,
    credentials: true,
    allowedHeaders:
      "Authorization, X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
    preflightContinue: true,
  })
);

// app.use(
//   session({
//     name: "TESTAPP",
//     secret: "capstone",
//     store: sessionStore,
//     resave: false,
//     saveUninitialized: true,
//     cookie: process.env.NODE_ENV == "dev" ? {
//       maxAge: 7 * 24 * 60 * 60 * 1000, // The maximum age (in milliseconds) of a valid session.
//       secure: false,
//       httpOnly: false,
//       sameSite: false,
//     }
//   : {
//       maxAge: 7 * 24 * 60 * 60 * 1000, // The maximum age (in milliseconds) of a valid session.
//       secure: true, // Required to enable cookies to go through https for better security
//       httpOnly: true, // Not allowing client-side javascript to interact with cookie, thus increasing security
//       sameSite: "none", // Required to enable cors for cookies
//     }
//   }
//   )
// )

// passport.serializeUser((user, done) => {
//   done(null, user.id);
// });

// passport.deserializeUser(async (id, done) => {
//   try {
//     const user = await User.findByPk(id);

//     done(null, user);
//   } catch (err) {
//     done(err);
//   }
// })

// app.use(passport.initialize());
// app.use(passport.session());

// app.use("/api", require("./api"));
// app.use("/auth", require("./auth"));

// const dbSetup = async () => {
//   await db.sync();
//   // sessionStore.sync();
// };
// dbSetup();
app.listen(8080, () => console.log(`Server is running on port: 8080`));

app.get("/", (req, res, next) => {
  res.send("You're hitting the backend!");
});

module.exports = app;
