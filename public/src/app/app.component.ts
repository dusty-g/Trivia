import { Component } from '@angular/core';
import {CommunicateService} from "./communicate.service"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  testResult= {}
  title = 'app';
  constructor(private _comm: CommunicateService){
    
  }
}
