const router = require('express').Router()
const { getSignup, postSignup, getLogin, postLogin, getProfile, logout } = require('../controllers/authControllers')
const { catchErrors } = require('../middlewares/handlers')
const { isLoggedIn } = require('../middlewares/auth')
const passport = require('passport')
const Recipe = require('../models/Recipe')

router.get('/', (req, res, next) => {
  Recipe.find()
    .then(recipess => {
      res.render('index', {recipess})
    })
    .catch(err => console.log(err))
})

router.get('/signup', getSignup)
router.post('/signup', catchErrors(postSignup))

router.get('/login', getLogin)
router.post('/login', postLogin)

router.get('/profile', isLoggedIn, getProfile)

router.get('/logout', logout)

//google
/*
router.get('/auth/google',
    passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login'] }));

router.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/profile');
  });*/
module.exports = router



