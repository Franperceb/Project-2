const {Router} = require('express')
const router = Router()
const axios = require('axios')
const Recipe = require('../models/Recipe')

//homepage
router.get('/', (req, res, next) => { 
    Recipe.find()
    .then(recipess => {
      res.render('index', {recipess})
    })
    .catch(err => console.log(err))
})





module.exports = router
