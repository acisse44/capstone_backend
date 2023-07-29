require("dotenv").config();
const express = require("express");
const app = express();
const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const passport = require("passport");
const cors = require("cors");
const db = require("./db");
const http = require('http');
const server = http.createServer(app); //wraps app in server, so we need server.listen to use it
const { Server } = require("socket.io");
const { User } = require("./db/models");
// const io = new Server(server);

const sessionStore = new SequelizeStore({ db });

//connecting to the MongoDB
const mongoose = require('mongoose');
const connectToMongo = async () => {
  await mongoose.connect(process.env.MONGO_URI);
  console.log("Connected to MongoDB");
};

connectToMongo();


// initialize, letting our frontend page access it
const io = new Server(server, {
  cors: {
    origin: process.env.FRONTEND_URL  || `http://localhost:3000`,
    credentials: true,
    allowedHeaders:
      "Authorization, X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
    preflightContinue: true,  },
});

// socket io setup
io.on('connection', (socket) => {
  // socket.on('chat message', (msg) => {
  //   io.emit('chat message', msg);
  //   console.log(msg);
  // });

  //create socket event for joining a room to then link to frontend
  //data is the roomid being passed in from frontend
  //socket.join is a function from socket
  // socket.on("join_room", (data) => {
  //   socket.join(data);
  //   console.log(`user joined room + ${data}`)
  // })

  console.log("user connected");

  //sends the message to all the users on the server
  socket.on('message', (data) => {
    socket.emit('messageResponse', data);
  });

  socket.on("disconnect", () => {
    console.log("user disconnected");
  })
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: process.env.FRONTEND_URL  || `http://localhost:3000`,
    credentials: true,
    allowedHeaders:
      "Authorization, X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
    preflightContinue: true,  },
  )

);

app.use(
  session({
    name: "TESTAPP",
    secret: "capstone",
    store: sessionStore,
    resave: false,
    saveUninitialized: true,
    cookie: process.env.NODE_ENV == "dev" ? { 
      maxAge: 7 * 24 * 60 * 60 * 1000, // The maximum age (in milliseconds) of a valid session.
      secure: false,
      httpOnly: false,
      sameSite: false,
    }
  : {
      maxAge: 7 * 24 * 60 * 60 * 1000, // The maximum age (in milliseconds) of a valid session.
      secure: true, // Required to enable cookies to go through https for better security
      httpOnly: true, // Not allowing client-side javascript to interact with cookie, thus increasing security
      sameSite: "none", // Required to enable cors for cookies
    }
  }
  )
)

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findByPk(id);

    done(null, user);
  } catch (err) {
    done(err);
  }
})

app.use(passport.initialize());
app.use(passport.session());

app.use("/api", require("./api"));
app.use("/auth", require("./auth"));
app.use("/chat", require ("./chat"));
app.use("/api/coversations", require("./api/conversations"));
app.use("/api/mongoMessages", require("./api/mongoMessages"));


const dbSetup = async () => {
  await db.sync();
  sessionStore.sync();
};
dbSetup();
server.listen(8080, () => console.log(`Server is running on port: 8080`));

module.exports = app;