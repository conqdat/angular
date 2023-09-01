import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ChildHomeComponent} from "./child-home/child-home.component";
import {ArticleDetailComponent} from "./articles/article-detail/article-detail.component";

const routes: Routes = [
  {
    path: "home",
    component: HomeComponent,
  },
  {
    path: "articles", loadChildren: () => import('./articles/articles.module').then(m => m.ArticlesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
