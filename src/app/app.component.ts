import {Component, OnInit, ViewChild} from '@angular/core';
import {BehaviorSubject} from "rxjs";

interface UserInterface {
  id :string
  name: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.user$.subscribe((data) => {
      console.log(data);
    })

    setTimeout(() => {
      this.user$.next([{ name: "Dat", id: "1" }])
    }, 1000)
  }
  user$ = new BehaviorSubject<UserInterface[]>([]);

}
