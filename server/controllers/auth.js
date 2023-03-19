const passport = require("passport")
const validator = require("validator")
const User = require("../models/User")

exports.getLogin = (req, res) => {
  if (req.user) {
    return res.redirect("/dashboard")
  }
  res.render("login", {
    title: "Login"
  })
}

exports.postLogin = (req, res, next) => {
  let { userName, email, password } = req.body.data.user

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
  console.log("passport line :", email)

  passport.authenticate("local", (err, user, info) => {
    if (err) {
      return next(err)
    }
    if (!user) {
      req.flash("errors", info)
      return res.redirect("/login")
    }
    // req.logIn(user, (err) => {
    //   if (err) {
    //     return next(err)
    //   }
    //   req.flash("success", { msg: "Success! You are logged in." })
    //   res.redirect(req.session.returnTo || "/dashboard")
    // })
    res.status(200).json({ msg: "authenticate success" })
  })(req, res, next)
}

exports.logout = (req, res) => {
  req.session.regenerate(() => {
    console.log("User has logged out.")
  })
  req.session.destroy((err) => {
    if (err)
      console.log("Error : Failed to destroy the session during logout.", err)
    req.user = null
    res.redirect("/")
  })
}

exports.getSignup = (req, res) => {
  if (req.user) {
    return res.redirect("/dashboard")
  }
  res.render("signup", {
    title: "Create Accounts"
  })
}

exports.postSignup = async (req, res, next) => {
  const { userName, email, password } = req.body.data.user
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
  if (!validator.equals(password, req.body.confirmPassword))
    validationErrors.push({ msg: "Passwords do not match" })

  if (validationErrors.length) {
    req.flash("errors", validationErrors)
    return res.redirect("/login")
  }

  console.log(userName, email, password)

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
      return res.status(200).json({ msg: "signup success" })
    } else {
      // Add new user to User collection
      const user = new User({
        userName: userName,
        email: email,
        password: password
      })

      await user.save()
      res.status(200).json({ msg: "success" })
      // req.logIn(user, (err) => {
      //   if (err) {
      //     return next(err)
      //   }
      //   res.redirect("/dashboard")
      // })
    }
  } catch (err) {
    console.log(err)
  }
}
