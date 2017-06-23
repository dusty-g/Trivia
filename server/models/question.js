let mongoose = require('mongoose')

let QuestionSchema = mongoose.Schema({
  question: {
    type: String,
    required: [true, "question is required"],
    minlength: [15, "question must be at least 15 characters"]
  },
  answers: [{answer: String, value: Number}],


}, {timestamps: true})

mongoose.model("Question", QuestionSchema)