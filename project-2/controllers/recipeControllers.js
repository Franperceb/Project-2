const Recipe = require('../models/Recipe')

exports.showOneRecipe = (req, res, next) => {
    const { id } = req.params
  Recipe.findById(id)
  .then(recipe => {
    res.render('recipes/recipe-detail', recipe)})
  .catch(err => console.log(err))
}

exports.searchRecipes = (req, res, next) => {
  let {query} = req.query
  Recipe.find({"title": {$regex: `${query}`, $options: 'i'}})
  .then(recipess => {
    console.log(recipess)
    res.render('index', {recipess})
  })
}