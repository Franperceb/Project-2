const User = require('../models/User')



exports.getSignup =  (req,res,next) =>{
  res.render('auth/signup')
}

exports.postSignup = async (req,res,next) => {
const {username, password} = req.body

  await User.create({username, password})
  res.redirect('/auth/login')
}

exports.getLogin = (req,res,next) =>{
  res.render('auth/login')
}

exports.postLogin = (req,res,next) =>{
  res.redirect('/profile')
}

exports.logout = (req,res,next) => {
   req.logout()
   res.redirect('/')
}


exports.profile = (req,res,next) => {
  res.render('auth/profile')
}


