const Recipe = require('../models/Recipe')

//checar createRecipe
exports.getCreateRecipe = (req, res) => {
  const { user } = req
  if(user.role === 'ADMIN'){
    res.render('admin/recipe-create')
  } else {
    res.redirect('/')
  }
}

exports.postCreateRecipe = (req, res) => {
  Recipe.create({...req.body})
  .then(recipe => res.redirect(`/recipes/${recipe._id}`))
  .catch(err => next(err))
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