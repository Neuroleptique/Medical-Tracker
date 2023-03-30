const LocalStrategy = require("passport-local").Strategy;
const mongoose = require("mongoose");
const User = require("../models/User");

module.exports = function (passport) {
  passport.use(
    new LocalStrategy({ usernameField: "email" }, async (email, password, done) => {
      let user;
      try {
      user = await User.findOne({ email: email.toLowerCase() })
      console.log(user)
      if (!user) {
        return done(null, false, {message: 'No user by that email'});
      }
      if (!user.password) {
        return done(null, false, {
          msg:
            "Your account was registered using a sign-in provider. To enable password login, sign in using a provider, and then set a password under your user profile.",
        });
      }
      }catch(err){
        return done(err)
      }

      let match = await user.comparePassword(password);
      if (!match) {
        return done(null, false, {message: 'Not a matching password'});
      }

      return done(null, user);
    })
  );

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser(async (id, done) => {
    try{
      let user = await User.findById(id)
      if (!user) {
        return done(new Error('user not found'));
      }
      done(null, user)
    }catch(err){
      console.error(err)
    }
  });
};
