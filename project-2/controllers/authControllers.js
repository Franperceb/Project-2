const User = require('../models/User')
const passport = require('passport')

exports.getSignup = (req, res, next) => res.render('auth/signup')
exports.postSignup = async (req, res, next) => {
  const user = await User.register({ ...req.body }, req.body.password)
  //Feedback
 console.log('The user registered:', user)
  res.redirect('/login')
}
exports.getLogin = (req, res, next) => res.render('auth/login')

<<<<<<< HEAD
exports.postLogin = passport.authenticate('local', {
  failureRedirect: '/login',
  successRedirect: '/profile'
})
exports.getProfile = (req, res, next) => res.render('auth/profile', { user: req.user })
exports.logout = (req,res,next) => {
   req.logout()
   res.redirect('/')
=======


exports.getSignup =  (req,res,next) =>{
  res.render('auth/signup', recipes)
>>>>>>> 3a551199db7e11c9855a65419f676c334d802517
}









