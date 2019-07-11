function getAllRecipes() {
  axios.get('https://api.edamam.com/search?q=default&app_id=2b350455&app_key=e3f7b66ca90d6605fb930fba70229b37')
  .then(recipes => {
    console.log(recipes.data.hits)
    console.log("si llega")
  })
  .catch(err => console.log(err))
}


//api key: e3f7b66ca90d6605fb930fba70229b37
//api id: 2b350455 
