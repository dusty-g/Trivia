import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component"
import {NewQuestionComponent} from "./new-question/new-question.component"
import {PlayComponent} from "./play/play.component"

const routes: Routes = [
  {
    path: '',
    pathMatch: "full",
    children: [],
    component: HomeComponent
  },
  {
    path: "question",
    component: NewQuestionComponent
  },
  {
    path: "play",
    component: PlayComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
