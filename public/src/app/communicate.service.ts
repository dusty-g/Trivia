import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs/BehaviorSubject"
@Injectable()
export class CommunicateService {
  testResult = new BehaviorSubject(null)
  updateTest(test){
    this.testResult.next(test)
  }
  constructor() { }

}
