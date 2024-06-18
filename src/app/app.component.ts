import { Component, ViewChild } from '@angular/core';
import { TestComponent } from './test/test.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'learn-angular';
  @ViewChild(TestComponent) testApp!: TestComponent;

  clickMe() {
    if (this.testApp) {
      this.testApp.hello();
    } else {
      console.log('TestComponent is not yet initialized');
    }
  }
}
