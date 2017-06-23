let mongoose = require('mongoose')

let UserSchema = mongoose.Schema({
  username: {
    type: String, 
    required: [true, "username is required"]
  }
}, {timestamps: true})
mongoose.model("User", UserSchema)