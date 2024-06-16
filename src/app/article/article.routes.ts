import { Routes } from '@angular/router';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { CanAccessArticle } from '../guards/article.guard';

export const articleRoutes: Routes = [
  { path: '', component: ArticleListComponent },
  {
    path: ':slug',
    canActivateChild: [CanAccessArticle],
    children: [{ path: '', component: ArticleDetailComponent }],
  }, // article/slug
];
