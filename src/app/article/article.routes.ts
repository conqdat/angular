import { Routes } from '@angular/router';
import { ArticleListComponent } from '../article-list/article-list.component';
import { ArticleDetailComponent } from '../article-detail/article-detail.component';

export const articleRoutes: Routes = [
  { path: '', component: ArticleListComponent },
  { path: ':slug', component: ArticleDetailComponent }, // article/slug
];
