const express = require("express");
const app = express();
const mongoose = require("mongoose");
const passport = require("passport");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const flash = require("express-flash");
const logger = require("morgan");
const connectDB = require("./config/database");
const mainRoutes = require('./routes/main');

// Use .env file in config folder
require("dotenv").config({ path: "./config/config.env" });

// Passport config
require("./config/passport")(passport);

// Using EJS for views
app.set("view engine", "ejs");

// Static Folder
app.use(express.static("public"));

// Body Parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Logging
app.use(logger("dev"));

// Setup Sessions - stored in MongoDB
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: process.env.DB_STRING }),
  })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

app.use(flash());

// Views in public folder
app.use(express.static('/public'));

// Router directories
app.use('/', mainRoutes);

// Connect To Database
connectDB().then(() => {
  app.listen(process.env.PORT, () => {
    console.log("Server is running, you better catch it!");
  })
})
