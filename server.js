const express = require("express");
const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const passport = require("passport");
const cors = require("cors");
const db = require("./db");
const app = express();
const http = require('http');
const server = http.createServer(app); //wraps app in server, so we need server.listen to use it 
const { Server } = require("socket.io");
// const io = new Server(server);

require("dotenv").config();

const sessionStore = new SequelizeStore({ db });

//initialize, letting our frontend page access it
const io = new Server(server, {
  cors: {
    origin: `http://localhost:3000`,
    methods: ["GET", "POST"],
  },
});

//socket io setup
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

//Helper functions
const serializeUser = (user, done) => done(null, user.id);
const deserializeUser = async (id, done) => {
  try {
    const user = await db.models.user.findByPk(id);
    done(null, user);
  } catch (error) {
    done(error);
  }
};

//Configs
const configSession = () => ({
  secret: "capstone",
  store: sessionStore,
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 2 * 60 * 60 * 1000,
  }, // 8 hours
  httpOnly: true,
});

// Middleware setup
const setupMiddleware = (app) => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(
    cors({
      origin: "http://localhost:3000", // allow to server to accept request from different origin
      methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
      credentials: true,
    })
  );
  app.use(session(configSession()));
  app.use(passport.initialize());
  app.use(passport.session());
  return app;
};

// Passport Setup
const setupPassport = () => {
  passport.serializeUser(serializeUser);
  passport.deserializeUser(deserializeUser);
};

// Routes
const setupRoutes = (app) => {
  app.use("/api", require("./api"));
  app.use("/auth", require("./auth"));
  app.use("/chat", require ("./chat")); //reach our chat page route
};

// Start server and sync the db
const startServer = async (app, port) => {
  await db.sync();
  server.listen(port, () => console.log(`Server is on port:${port}`));
  return app;
};

// Configure all functions in one major funtion
const configureApp = async (port) => {
  setupPassport();
  setupMiddleware(app);
  await sessionStore.sync();
  setupRoutes(app);
  return startServer(app, port);
};

module.exports = configureApp(8080);
