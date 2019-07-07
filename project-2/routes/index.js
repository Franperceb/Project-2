const passport = require('../config/passport')
const {Router} = require('express')
const router = Router()
const {isLoggedIn, isAuth} = require('../middlewares/auth')
const {  
  getSignup, 
   getLogin,
     postSignup,
     postLogin,
     profile,
      logout
} = require('../controllers/authControllers')

//homepage
router.get('/', (req, res, next) => {
  res.render('index')
})

router.get('/auth/signup', getSignup)
router.post('/auth/signup', postSignup)
router.get('/auth/login', getLogin)
router.post('/auth/login', postLogin)
router.get('/logout', logout)
router.get('/profile', profile )


module.exports = router
