let mongoose = require('mongoose')
let Question = mongoose.model("Question")
let underscore = require("underscore")
module.exports = {

  create: (request, response)=>{
    //add login check if(request.session.user_id)...


    console.log("inside question controller create")
    //body should be {question: string, answer: string, dummy1: string, dummy2: string}
    //{question: string, answers: [{answer: "sdfsdfsd", value: 1}, {answer: "sdfsadf, value: 0"}, {answer: "lasdf", value: 0}]}
    let newQuestion = new Question(request.body)
    newQuestion.save().then((question)=>{
      console.log("saved, returning question_id as json")
      response.json(question)
    }).catch((error)=>{
      console.log("error in questions.js create", error)
      response.status(500).json("false")
    })
  },
  getThreeRandomly: (request, response)=>{
    console.log("get three questions.js")
    Question.find({}).exec((error, questions)=>{
      if(error){
        console.log("error in getthreerandomly")
        response.status(500).json(false)
      }else{
        console.log("returning 3 hopefully")
        response.json(underscore.sample(questions, 3))
      }

    })
  }

}