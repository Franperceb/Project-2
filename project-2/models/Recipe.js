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
    required: true
  },
  healthLabels: {
    type: [String],
    required: true
  },
  dietLabels: {
    type: [String],
    required: true
  },
  cautions: {
    type: [String],
    required: true
  },
  comments: [commentSchema]
},{
  timestamps: true,
  versionKey: false
})

module.exports= model('Recipe', recipeSchema)