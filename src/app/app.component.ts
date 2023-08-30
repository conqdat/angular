import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'learn-angular';
  currentName: string = "Cong Dat";

  children = [
    {
      childAge: 18,
      childName: "Cong Dat 18"
    },
    {
      childAge: 19,
      childName: "Cong Dat 19"
    },
    {
      childAge: 20,
      childName: "Cong Dat 20"
    },
  ]

  handleEmittedEvent(name: string) {
    this.currentName = name
  }
}
