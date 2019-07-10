const { model, Schema } = require('mongoose')
const passportLocalMongoose = require('passport-local-mongoose')

const userSchema = new Schema(
  {
    username: {
      type:String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    role: {
      type: String,
      enum: ['ADMIN', 'USER'],
      default: ['USER']
    },
    favorites: [Number]
  },
  {
    timestamps: true,
    versionKey: false
  }
)

userSchema.plugin(passportLocalMongoose, { usernameField: 'username'})

module.exports = model('User', userSchema)
