const router = require('express').Router()
const { showOneRecipe, searchRecipes } = require('../controllers/recipeControllers')
const { isLoggedIn } = require('../middlewares/auth')

// router.get('/:id', isLoggedIn, showOneRecipe)
router.get('/search', searchRecipes)
router.get('/:id', isLoggedIn, showOneRecipe)

module.exports = router