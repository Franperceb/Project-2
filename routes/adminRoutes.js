const router = require('express').Router()
const { isLoggedIn} = require('../middlewares/auth')
const { getCreateRecipe, postCreateRecipe, getUpdateRecipe, postUpdateRecipe, deleteRecipe } = require('../controllers/adminControllers')

//-------Crud---------//
router.get("/createRecipe", getCreateRecipe)
router.post("/createRecipe", postCreateRecipe)

//---------crUd----------//
router.get("/:id/updateRecipe", getUpdateRecipe)

router.post("/:id/updateRecipe", postUpdateRecipe)

//--------cruD---------//
router.get("/:id/deleteRecipe", deleteRecipe)

module.exports = router;