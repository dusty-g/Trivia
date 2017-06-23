let mongoose = require('mongoose')
let User = mongoose.model("User")
let Question = mongoose.model("Question")
let Test = mongoose.model("Test")

module.exports = {
  create: (request, response)=>{
    //request.body should be {_user: "f3fl23f32f", score: 2}
    let newTest = new Test(request.body)
    newTest.save().then(()=>{
      console.log("saved test, returning test")
      response.json(newTest)
    }).catch((err)=>{
      console.log("catching error in create tests.js", err)
      response.status(500).json(false)
    })
  },

  getAll: (request, response)=>{
    Test.find({}).sort("-score").populate("_user").exec((err, tests)=>{
      if(err){
        console.log("error in getall tests.js")
        response.status(500).json(false)
      }else{
        console.log("returning array of tests")
        response.json(tests)
      }
    })
  }


}