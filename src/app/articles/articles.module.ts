import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {articleRoutes} from "./article.routes";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(articleRoutes)
  ]
})
export class ArticlesModule { }
