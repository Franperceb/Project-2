require('dotenv').config();
const User = require('../models/User')
const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
//pasar el env
// Local 
passport.use(User.createStrategy())
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

//google  Strategy
passport.serializeUser((user,done)=>{
  done(null,user.id)
})
passport.deserializeUser((id,done)=>{
 User.findById(id).then((user)=>{
   done(null,user.id)
 })
})


passport.use(new GoogleStrategy({
  clientID: "329051731061-4ju94n5sgeud01j7jc6f4q2ob7anqduk.apps.googleusercontent.com",
  clientSecret: "QY2csvPKIKNmt62T4IgDHu9K",
  callbackURL:  "http://localhost:3000/auth/google/callback"
} ,(accessToken,refreshToken,profile, done)=>{

  User.findOne({googleId: profile.id}).then((currentUser)=>{
    if(currentUser){
       console.log('user is:', currentUser) //already  have the user
       done(null,currentUser)
    }else{
      
      //if we dont have the user, create it
      new User({ 
        username: profile.displayName,
        googleId: profile.id,
        email: "username" + "@gmail.com"
     }).save()
     .then((newUser)=>{
        done(null,newUser)
        })
    }
  })
}  
));

module.exports = passport
