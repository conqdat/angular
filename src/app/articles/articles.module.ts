import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {articleRoutes} from "./article.routes";
import { EditArticleComponent } from './edit-article/edit-article.component';



@NgModule({
  declarations: [
    EditArticleComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(articleRoutes)
  ]
})
export class ArticlesModule { }
