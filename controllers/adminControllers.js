const Recipe = require('../models/Recipe')

//checar createRecipe
exports.createRecipe = (req, res) => {
  const { user } = req
  let canCreateRecipe
  Recipe.find()
  .then(recipes => {
    canCreateRecipe = true
    res.render("index", { user, recipes, canCreateRecipe })
  })
}

exports.getUpdateRecipe = (req, res) => {
  let { id } = req.params
  Recipe.findById(id)
  .then(recipe => {
    res.render("admin/recipe-form", recipe);
  })
}

exports.postUpdateRecipe = (req, res) => {
  let { id } = req.params;
  console.log(id)
    
  Recipe.findByIdAndUpdate(id, { ...req.body }, { new: true })
  .then(recipe => {
    console.log(recipe.name)
    res.redirect(`/recipes/${recipe._id}`)
  })
}

exports.deleteRecipe = (req, res) => {
  let { id } = req.params
  Recipe.findByIdAndDelete(id)
  .then(() => {
    res.redirect("/");
  })
}