const router = require('express').Router()
const { isLoggedIn } = require('../middlewares/auth')
const { showOneRecipe, searchRecipes , commentRecipe} = require('../controllers/recipeControllers')

router.get('/')
router.get('/search', searchRecipes)
router.get('/:id', isLoggedIn, showOneRecipe)
router.get('/:id', showOneRecipe)
router.post('/:id', commentRecipe)



module.exports = router
