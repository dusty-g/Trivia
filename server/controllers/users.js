let mongoose = require('mongoose')
let User = mongoose.model("User")

module.exports = {
  //delete this one after debugging!
  getAll: (request, response)=>{
    console.log("getall users.js")
    User.find({}).exec((err, users)=>{
      if(err){
        console.log("error in get all /users")
        response.status(500).json(false)
      }else{
        response.json(users)
      }
    })
  },
  

  create: (request, response)=>{
    console.log("create user users.js")
    User.findOne({username: request.body.username.toLowerCase()}, (error, user)=>{
      if(error){
        console.log("error finding user  create: users.js")
        response.status(500).json(false)
      }else{
        if(user){
          request.session.user_id = user._id
          response.json(user._id)
        }else{
          //user not in db, create user
          let newUser = new User(request.body)
          newUser.username = newUser.username.toLowerCase()
          newUser.save().then(()=>{request.session.user_id = newUser._id;response.json(newUser._id)}).catch(()=>{console.log("catch in create user users.js")
          response.status(500).json(false)
          })
        }
      }
    })
  },

  getOne: (request, response)=>{
    console.log("getone users.js")
    User.findById(request.params.id, (err, user)=>{
      console.log("inside get one user controller")
      if(err){
        console.log("err in users.js getOne")
        response.status(500).json(false)
      }else{
        console.log("returning user")
        console.log(user)
        response.json(user)
      }
    })
    console.log("after findbyid")
  },

  logout: (request, response)=>{
    console.log("logout users.js")
    request.session.destroy()
    response.redirect("/")

  },

  checkStatus: (request, response)=>{
    console.log("checkstatus users.js")
    if(request.session.user_id){
      response.json(request.session.user_id)
    }else{
      response.status(500).json(false)
    }
  }




}