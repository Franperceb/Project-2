const axios = require('axios')
const router = require('express').Router()
const { getSignup, postSignup, getLogin, postLogin, getProfile, logout } = require('../controllers/authControllers')
const { catchErrors } = require('../middlewares/handlers')
const { isLoggedIn } = require('../middlewares/auth')
const passport = require('passport')
const Recipe = require('../models/Recipe')

router.get('/', (req, res, next) => {
  console.log('wtf')
  Recipe.find()
  .then(recipess => {
    res.render('index',{recipess})
  })
  .catch(err => console.log(err))
})

router.get('/signup', getSignup)
router.post('/signup', catchErrors(postSignup))

router.get('/login', getLogin)
router.post('/login', postLogin)

router.get('/profile', isLoggedIn, getProfile)

router.get('/logout', logout)

router.get('/schedule', (req,res,next)=>{
  res.render('schedule')
})

//google
router.get('/auth/google',
    passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login'] }));

router.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/profile');
  })

router.get('/api', (req, res, next) => {
  axios.get('https://api.edamam.com/search?q=sugar&app_id=2b350455&app_key=e3f7b66ca90d6605fb930fba70229b37&from=0&to=1')
  .then(recipes => {
    res.status(200)
    let totalRecipes = recipes.data.hits

    totalRecipes.forEach(recipe => {

      let newRecipe = {
      title: recipe.recipe.label,
      ingredients: recipe.recipe.ingredientLines,
      instructions: recipe.recipe.url,
      servings: recipe.recipe.yield,
      calories: Math.floor(recipe.recipe.calories),
      image: recipe.recipe.image,
      healthLabels: recipe.recipe.healthLabels,
      dietLabels: recipe.recipe.dietLabels,
      cautions: recipe.recipe.cautions
      }

      Recipe.create(newRecipe)
      .then(recipe => {
        console.log(recipe)
      })
      .catch(err => console.log(err))
    });
    
  })
  .catch(err => console.log(err))
})
  
module.exports = router



