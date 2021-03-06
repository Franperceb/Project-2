const {Schema , model} = require('mongoose')


const commentSchema = new Schema({
  comment: {
    type: String
  },
  user: {
    type: String,
    ref: 'User'
  },
   commentId: Schema.ObjectId
}, {
  timestamps: true, 
  versionKey: false
})

const recipeSchema = new Schema ({
  title: {
    type: String,
    required: true
  },
  ingredients: {
    type: [String],
    required: true
  },
  instructions: {
    type: String,
    required: true
  },
  calories: {
    type: Number,
    required: true
  },
  servings: {
    type: Number,
    required: true
  },
  image: {
    type: String,
    default: 'https://img.freepik.com/free-photo/food-background-food-concept-with-various-tasty-fresh-ingredients-cooking-italian-food-ingredients-view-from-with-copy-space_1220-1491.jpg?size=626&ext=jpg',
    required: true
  },
  healthLabels: {
    type: [String]
  },
  dietLabels: {
    type: [String]
  },
  cautions: {
    type: [String]
  },
  likes: {
    type: [String]
  },
  comments: [commentSchema]
},{
  timestamps: true,
  versionKey: false
})

module.exports= model('Recipe', recipeSchema)