const {Router} = require('express')
const router = Router()
const axios = require('axios')
const Recipe = require('../models/Recipe')

//homepage
router.get('/', (req, res, next) => { 
    Recipe.find()
    .then(recipess => {
      res.render('index', {recipess})
    })
    .catch(err => console.log(err))
})

router.get('/api', (req, res, next) => {
  axios.get('https://api.edamam.com/search?q=carrot&app_id=2b350455&app_key=e3f7b66ca90d6605fb930fba70229b37&from=0&to=10')
  .then(recipes => {
    res.status(200)
    let totalRecipes = recipes.data.hits

    totalRecipes.forEach(recipe => {

      let newRecipe = {
      title: recipe.recipe.label,
      ingredients: recipe.recipe.ingredientLines,
      instructions: recipe.recipe.url,
      servings: recipe.recipe.yield,
      calories: recipe.recipe.calories,
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

router.get('/profile', (req, res, next) => {
  res.render('profile')
})


module.exports = router
