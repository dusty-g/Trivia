import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"
import {DatabaseService} from "./../database.service"
import {CommunicateService} from "./../communicate.service"
@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit {
  user_id: string
  username: string
  questions = []
  score: number
  scores = [{value: ""},{value: ""},{value: ""}]
  constructor(private _dbService: DatabaseService, private _router: Router, private _comm: CommunicateService) { }

  ngOnInit() {
    this._dbService.checkStatus().then((user_id)=>{
      this.user_id = user_id

      this._dbService.getOneUser(user_id).then((user)=>{
        this.username = user.username
      }).catch((err)=>{
        console.log("error getting user in home component", err)
        this._router.navigate(["/"])
      })

    }).catch((err)=>{
      this._router.navigate(["/"])
    })

    this._dbService.getThreeQuestions().then((questions)=>{
      this.questions = questions
    }).catch((error)=>{
      console.log("error getting questions in play comp")
    })

  }
  submitTest(data){
    console.log(Math.floor((parseInt(data.value.scores0)+parseInt(data.value.scores1)+parseInt(data.value.scores2))/10))
    this.score = Math.floor((parseInt(data.value.scores0)+parseInt(data.value.scores1)+parseInt(data.value.scores2))/10)

    this._dbService.createTest({_user: this.user_id, score: this.score, percent: this.score/3.0*100}).then(()=>{
      this._comm.updateTest({_user: this.user_id, score: this.score, percent: this.score/3.0*100})
      this._router.navigate(["/"]).catch((err)=>{
        console.log("error submitting test")
      })
    })
  }

}
