import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(tests: any, search: string): any {
    if(!search){return tests}
    let filtered = []
    for (let test of tests){
      if (test._user.username.toLowerCase().includes(search)|| test.score.toString().includes(search)||test.percent.toString().includes(search)){
        filtered.push(test)
      }
    }
    return filtered
  }

}
