import { Component } from '@angular/core';
import {filter, from, interval, map, of, pluck} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users = [
    {
      id: 'ddfe3653-1569-4f2f-b57f-bf9bae542662',
      username: 'tiepphan',
      firstname: 'tiep',
      lastname: 'phan',
    },
    {
      id: '34784716-019b-4868-86cd-02287e49c2d3',
      username: 'nartc',
      firstname: 'chau',
      lastname: 'tran',
    },
  ];

  title = 'learn-angular';
  _a = of(this.title).subscribe(value => {
    // console.log(value)
  })

  _b = from(['1', '2', '3']).subscribe(a => {
    // console.log(a)
  })

  _c = interval(1000).subscribe(value => {
  })

  transformedUsers$ = from(this.users).pipe(
    map(user => ({
      id: user.id,
      fullName: `${user.firstname} ${user.lastname}`,
    }))
  )

  pluckedUsers$ = from(this.transformedUsers$).pipe(
    pluck('fullName')
  )

  _d = from([1,2,3,4]).pipe(
    filter(x => x % 2 == 0)
  ).subscribe(value => {
    // console.log(value)
  })

  constructor() {

  }
}
