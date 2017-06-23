import { Component, OnInit } from '@angular/core';
import {DatabaseService} from "./../database.service"
import {Router} from "@angular/router"

@Component({
  selector: 'app-new-question',
  templateUrl: './new-question.component.html',
  styleUrls: ['./new-question.component.css']
})
export class NewQuestionComponent implements OnInit {
  newQuestion = {question: "", answers: [{answer: "", value: 10},{answer: "", value: 1},{answer: "", value: 2}]}
  constructor(private _dbService: DatabaseService, private _router: Router) { }

  ngOnInit() {
  }

  submitQuestion(question){
    this._dbService.createQuestion(question).then(()=>{
      this._router.navigate(["/"])
    }).catch((err)=>{
      console.log("error submitting question")

    })
  }
}
