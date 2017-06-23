let mongoose = require('mongoose')
let path = require("path")
let questions = require("./../controllers/questions")
let users = require("./../controllers/users")
let tests = require("./../controllers/tests")

module.exports = (app)=>{
  //questions
  app.post("/questions/create", questions.create)
  app.get("/questions/three", questions.getThreeRandomly)

  //users
  app.post("/users/create", users.create)
  app.get("/users/check", users.checkStatus)
  //********************* delete this route!
  app.get("/users", users.getAll)
  //*********^^^^^^^^^^^^ delete this route!
  app.get("/logout", users.logout)
  app.get("/users/:id", users.getOne)
  
  //tests
  app.post("/tests/create", tests.create)
  app.get("/tests", tests.getAll)


  app.get("*", (request, response)=>{
    response.sendFile(path.resolve("./public/dist/index.html"))
  })
}