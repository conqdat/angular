import {Component, OnInit} from '@angular/core';
import { TestService } from "./test.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // providers: [TestService]
})
export class AppComponent implements OnInit {
  title = 'learn-angular';
  protected readonly Date = Date;

  person = {
    name: "Cong Dat",
    age: 22
  }


  constructor(private testService: TestService) {}

  ngOnInit(): void {
    this.testService.test('nothing')
  }

}
