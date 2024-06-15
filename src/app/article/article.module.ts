import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleListComponent } from '../article-list/article-list.component';
import { ArticleDetailComponent } from '../article-detail/article-detail.component';
import { RouterModule } from '@angular/router';
import { articleRoutes } from './article.routes';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(articleRoutes)],
  declarations: [ArticleListComponent, ArticleDetailComponent],
})
export class ArticleModule {}
