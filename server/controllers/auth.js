const passport = require("passport")
const validator = require("validator")
const User = require("../models/User")

exports.postLogin = (req, res, next) => {
  let { userName, email, password } = req.body

  let validationErrors = []
  if (!validator.isEmail(email))
    validationErrors.push({ msg: "Please enter a valid email address." })
  if (validator.isEmpty(password))
    validationErrors.push({ msg: "Password cannot be blank." })

  if (validationErrors.length) {
    req.flash("errors", validationErrors)
    return res.redirect("/login")
  }
  email = validator.normalizeEmail(email, {
    gmail_remove_dots: false
  })

  passport.authenticate("local", (err, user, info) => {
    if (err) {
      return next(err)
    }
    if (!user) {
      req.flash("errors", info)
      return res.status(401).json({ msg: "Invalid username or password" })
    }
    req.logIn(user, (err) => {
      if (err) {
        return next(err)
      }
      req.flash("success", { msg: "Success! You are logged in." })
      // res.redirect(req.session.returnTo || "/dashboard")
    })
    res.status(200).json({ msg: "authenticate success" })
  })(req, res, next)
}

exports.postSignup = async (req, res, next) => {
  console.log(req)

  let { userName, email, password } = req.body
  console.log(userName, email, password)

  // Input Validation
  const validationErrors = []
  if (!validator.isLength(userName, { min: 3, max: 25 }))
    validationErrors.push({
      msg: "Username must be between 3 to 25 characters"
    })
  if (!validator.isEmail(email))
    validationErrors.push({ msg: "Please enter a valid email address." })
  if (!validator.isLength(password, { min: 8 }))
    validationErrors.push({
      msg: "Password must be at least 8 characters long"
    })
  // if (!validator.equals(password, req.body.confirmPassword))
  //   validationErrors.push({ msg: "Passwords do not match" })

  if (validationErrors.length) {
    req.flash("errors", validationErrors)
    return res.status(401).json({ msg: validationErrors })
  }

  try {
    // Email and userName sanitization
    email = validator.normalizeEmail(email, {
      gmail_remove_dots: false,
      all_lowercase: true
    })

    userName = userName.toLowerCase()

    // Verify if username or email already exist
    const existingUser = await User.findOne({
      $or: [{ email: email }, { userName: userName }]
    })

    if (existingUser) {
      req.flash("errors", {
        msg: "Account with that email address or username already exists."
      })
      // return res.redirect("../signup")
      console.log("existing user")
      return res.status(400).json({
        msg: "Account with that email address or username already exists."
      })
    } else {
      // Add new user to User collection
      const user = new User({
        userName: userName,
        email: email,
        password: password
      })

      await user.save()
      req.logIn(user, (err) => {
        if (err) {
          return next(err)
        }
        // res.redirect("/dashboard")
        res.status(200).json({ msg: "User can login to dashboard" })
      })
    }
  } catch (err) {
    console.log(err)
  }
}
