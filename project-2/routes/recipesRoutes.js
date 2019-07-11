const router = require('express').Router()
const { isLoggedIn } = require('../middlewares/auth')
const { showOneRecipe, searchRecipes , commentRecipe} = require('../controllers/recipeControllers')

// router.get('/:id', isLoggedIn, showOneRecipe)
router.get('/search', searchRecipes)
router.get('/:id', showOneRecipe)
router.get('/')
router.post('/:id', commentRecipe )


module.exports = router
