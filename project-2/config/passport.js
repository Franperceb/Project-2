require('dotenv').config();
const User = require('../models/User')
const passport = require('passport')
// Local 
passport.use(User.createStrategy())

//google
/*
let  GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;


passport.use(new GoogleStrategy({
  clientID: "329051731061-r1ak4qn0ec8ptrin2dg1easlhrtca6mh.apps.googleusercontent.com",
  clientSecret: "M9bC4B2aKcS2fwaPE-dCl1vO",
  callbackURL:  "http://localhost:3000/auth/google/callback"
} ,  
 

));
*/


passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

module.exports = passport
