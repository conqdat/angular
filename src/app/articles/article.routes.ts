import {Routes} from "@angular/router";
import {ArticleListComponent} from "./article-list/article-list.component";
import {ArticleDetailComponent} from "./article-detail/article-detail.component";
import {ArticlesGuard} from "../guards/articles.guard";

export const articleRoutes: Routes = [
  {
    path: "",
    component: ArticleListComponent
  },
  {
    path: ":slug",
    canActivateChild: [ArticlesGuard],
    children: [
      { path: "", component: ArticleDetailComponent }
    ]
  }

]
