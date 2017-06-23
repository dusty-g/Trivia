import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DatabaseService } from "./database.service"
import { FormsModule } from "@angular/forms"
import { HttpModule } from "@angular/http"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PlayComponent } from './play/play.component';
import { NewQuestionComponent } from './new-question/new-question.component';
import { FilterPipe } from './filter.pipe';
import {CommunicateService} from "./communicate.service"
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PlayComponent,
    NewQuestionComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [DatabaseService, CommunicateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
