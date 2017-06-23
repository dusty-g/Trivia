import { Injectable } from '@angular/core';
import { Http } from "@angular/http"
import "rxjs"

@Injectable()
export class DatabaseService {

  constructor(private _http: Http) { }
  //users
  logout(){
    return this._http.get("/logout").toPromise()
  }
  checkStatus(){
    return this._http.get("/users/check").map(data=>data.json()).toPromise()
  }
  createUser(user){
    return this._http.post("/users/create", user).map(data=>data.json()).toPromise()
  }
  getOneUser(user_id){
    console.log("dbservice getoneuser user_id: ", user_id)
    return this._http.get("/users/"+user_id).map(data=>data.json()).toPromise()
  }

  //questions
  createQuestion(question){
    return this._http.post("/questions/create", question).toPromise()
  }
  getThreeQuestions(){
    return this._http.get("/questions/three").map(data=>data.json()).toPromise()
  }

  //tests
  createTest(userid_Score_object){
    //{_user: "wfelkfjwl3", score: 2}
    return this._http.post("/tests/create", userid_Score_object).toPromise()
  }
  getAllTests(){
    return this._http.get("/tests").map(data=>data.json()).toPromise()
  }



}
