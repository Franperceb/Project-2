const router = require('express').Router()
const { isLoggedIn} = require('../middlewares/auth')
const { createRecipe, getUpdateRecipe, postUpdateRecipe, deleteRecipe } = require('../controllers/adminControllers')

//-------Crud---------//
router.get("/createRecipe", isLoggedIn, createRecipe)

//---------crUd----------//
router.get("/:id/updateRecipe", getUpdateRecipe)

router.post("/:id/updateRecipe", postUpdateRecipe)

//--------cruD---------//
router.get("/:id/deleteRecipe", deleteRecipe)

module.exports = router;