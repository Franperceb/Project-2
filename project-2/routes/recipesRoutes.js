const router = require('express').Router()
const { isLoggedIn } = require('../middlewares/auth')
const { showOneRecipe, searchRecipes } = require('../controllers/recipeControllers')

// router.get('/:id', isLoggedIn, showOneRecipe)
router.get('/search', searchRecipes)
router.get('/:id', showOneRecipe)

module.exports = router