const express = require("express")
const app = express()
const mongoose = require("mongoose")
const passport = require("passport")
const session = require("express-session")
const MongoStore = require("connect-mongo")
const flash = require("express-flash")
const logger = require("morgan")
const connectDB = require("./config/database")
const mainRoutes = require("./routes/main")
const cors = require("cors")

// Use path to access directory for static site serving
const path = require("path")

// Use .env file in config folder
require("dotenv").config({ path: "./config/config.env" })

// Passport config
require("./config/passport")(passport)

// Using EJS for views
app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))

// Static Folder
// app.use(express.static("public"))

// Static Folder for React App
app.use(express.static(path.resolve(__dirname, "../client/dist")))

// Body Parsing
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Logging
app.use(logger("dev"))

// Setup Sessions - stored in MongoDB
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: process.env.DB_STRING })
  })
)
// use cors
app.use(cors())

// Passport middleware
app.use(passport.initialize())
app.use(passport.session())

app.use(flash())

// Views in public folder
// app.use(express.static("/public"))

// // Router directories
app.use("/", mainRoutes)

//serves react components
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/dist", "index.html"))
})

// Connect To Database
connectDB().then(() => {
  app.listen(process.env.PORT, () => {
    console.log("Server is running, you better catch it!")
  })
})
