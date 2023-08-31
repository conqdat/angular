import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges, OnDestroy,
  OnInit, SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  title = 'learn-angular';

  constructor() {
    console.log("constructor")
  }

  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked")
  }

  ngAfterContentInit(): void {
    console.log("ngAfterContentInit")
  }

  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked")
  }

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit")
  }

  ngDoCheck(): void {
    console.log("ngDoCheck")
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges")
  }

  ngOnDestroy(): void {
    console.log("ngOnDestroy")
  }

  ngOnInit(): void {
    console.log("ngOnInit")
  }
}
