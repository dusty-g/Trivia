import { Component, OnInit } from '@angular/core';
import {DatabaseService} from "./../database.service"
import {Router} from "@angular/router"
import {CommunicateService} from "./../communicate.service"
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  username: string
  user_id: string
  testResult = {}
  newUser = {username: ""}
  search = ""
  tests = []
  constructor(private _dbService: DatabaseService, private _router: Router, private _comm: CommunicateService) { 
    this._comm.testResult.subscribe(
      (updatedTest)=>{
        this.testResult = updatedTest
      }, (err)=>{}, ()=>{}
    )
  }
  login(user){
    this._dbService.createUser(user).then((user_id)=>{
      this.user_id = user_id
      this.newUser = {username: ""}
      this._dbService.getOneUser(user_id).then((dbUser)=>{
        this.username = dbUser.username
      }).catch((err)=>{
        console.log("error getting username")
      })

    }).catch((err)=>{
      console.log("error in login homecomponent")
    })
  }
  play(){
    this._router.navigate(["/play"])
  }
  getTests(){
    this._dbService.getAllTests().then((tests)=>{
      this.tests = tests
    }).catch((err)=>{
      console.log("error getting tests")
    })
  }
  ngOnInit() {
    this._dbService.checkStatus().then((user_id)=>{
      this.user_id = user_id

      this._dbService.getOneUser(user_id).then((user)=>{
        this.username = user.username
      }).catch((err)=>{
        console.log("error getting user in home component", err)
      })

    }).catch((err)=>{
      console.log("not logged in")
    })

    this.getTests()

  }

}
