import { Component, ElementRef, ViewChild } from '@angular/core';
import { TonggleComponent } from './tonggle/tonggle.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'learn-angular';

  @ViewChild('tonggleApp', { static: true }) tonggleApp !: TonggleComponent
  @ViewChild('congdat') h1Element !: ElementRef<HTMLElement>;

  insideTonggle() {
    this.tonggleApp.clickAtTonggle()
  }

  checkElement() {
    console.log(this.h1Element.nativeElement.innerHTML);
  }
}
