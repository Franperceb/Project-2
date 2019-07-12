const User = require('../models/User')
const passport = require('passport')
const flash = require('connect-flash')

exports.getSignup = (req, res, next) => res.render('auth/signup')
exports.postSignup = async  (req, res, next) => {
  const user = await User.register({ ...req.body }, req.body.password)
  console.log('The user registered:', user)
  res.redirect('/login')
}

exports.getLogin = (req, res, next) => res.render('auth/login', {'message': req.flash("error")})

exports.postLogin = passport.authenticate('local', {
  failureRedirect: '/login',
  successRedirect: '/profile',
  failureFlash: true,
  passReqToCallback: true
})
exports.getProfile = (req, res, next) => res.render('auth/profile', { user: req.user })
exports.logout = (req,res,next) => {
   req.logout()
   res.redirect('/')
}








