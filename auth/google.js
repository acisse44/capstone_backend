const express = require("express");
const router = express.Router();
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const { User } = require("../db/models");
const dotenv = require("dotenv").config().parsed;

// Passport Google OAuth strategy
passport.use(
  new GoogleStrategy(
    {
      clientID: dotenv.GOOGLE_CLIENT_ID,
      clientSecret: dotenv.GOOGLE_CLIENT_SECRET,
      callbackURL: dotenv.GOOGLE_CALLBACK_URL,
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const googleId = profile.id;
        const username = profile.emails[0].value; 
        const password = null;
        const points = 0; 
        const salt = null; 
        const isAdmin = false; 

        // Try to find user in the database, if not present create a new user
        const [user] = await User.findOrCreate({
          where: { googleId },
          defaults: { username, password, points, salt, isAdmin },
        });

        // Done with no errors and the user
        done(null, user);
      } catch (err) {
        // Error occurred, pass it through
        done(err);
      }
    }
  )
);

// Mounted on auth/google
// auth/google
// Trigger Google OAuth
router.get(
  "/",
  passport.authenticate("google", { scope: ["profile"] })
);

// auth/google/callback
// Google OAuth callback
router.get(
  "/callback",
  passport.authenticate("google", {
    failureRedirect: "http://localhost:3000/login",
  }),
  (req, res) => {
    // Successful authentication, redirect home.
    res.redirect("http://localhost:3000/home");
  }
);

module.exports = router;
