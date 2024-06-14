import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleRoutingModule } from './article-routing.module';
import { ArticleListComponent } from '../article-list/article-list.component';
import { ArticleDetailComponent } from '../article-detail/article-detail.component';

@NgModule({
  imports: [
    CommonModule,
    ArticleRoutingModule
  ],
  declarations: [ArticleListComponent, ArticleDetailComponent]
})
export class ArticleModule { }