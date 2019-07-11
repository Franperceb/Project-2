const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  comment: {
    type: String,
  },
   commentId: Schema.ObjectId
}, {
  timestamps: true, 
  versionKey: false
})

module.exports = mongoose.model("Comment", commentSchema)