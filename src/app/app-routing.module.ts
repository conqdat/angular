import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanAccessArticle } from './guards/article.guard';

const routes: Routes = [
  {
    path: 'article',
    loadChildren: () =>
      import('./article/article.module').then((m) => m.ArticleModule),
    data: {
      feature: 'article',
      permissions: ['read'],
    },
    canActivate: [CanAccessArticle],
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
