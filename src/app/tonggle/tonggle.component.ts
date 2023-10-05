import { Component } from '@angular/core';

@Component({
  selector: 'app-tonggle',
  templateUrl: './tonggle.component.html',
  styleUrls: ['./tonggle.component.css']
})
export class TonggleComponent {
  clickAtTonggle() {
    console.log("I am tonggle");
  }
}
