import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { articleRoutes } from './article.routes';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { ArticleListComponent } from './article-list/article-list.component';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(articleRoutes)],
  declarations: [ArticleListComponent, ArticleDetailComponent],
})
export class ArticleModule {}
