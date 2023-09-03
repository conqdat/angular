import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyPipe } from "./myPipe";
import {TestService} from "./test.service";

@NgModule({
    declarations: [
        AppComponent,
        MyPipe
    ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [], // TestService
  bootstrap: [AppComponent]
})
export class AppModule { }
