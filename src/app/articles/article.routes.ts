import {Routes} from "@angular/router";
import {ArticleListComponent} from "./article-list/article-list.component";
import {ArticleDetailComponent} from "./article-detail/article-detail.component";

export const articleRoutes: Routes = [
  {
    path: "",
    component: ArticleListComponent
  },
  {
    path: "detail/:slug",
    component: ArticleDetailComponent
  }

]