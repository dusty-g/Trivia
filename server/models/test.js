let mongoose = require('mongoose')

let TestSchema = mongoose.Schema({
  _user: {
    type: mongoose.Schema.Types.ObjectId,
    required: [true, "user is required"],
    ref: "User"
  },
  score: {
    type: Number,
    required: [true, "score is required"],
    min: [0, "score can't be less than 0!"],
    max: [4, "score can't be higher than 4!"]
  },
  percent:{
    type: Number
  }
})

mongoose.model("Test", TestSchema)