import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../model/article.model';
import { ArticleService } from '../article.service';
@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
})
export class ArticleListComponent implements OnInit {
  articles$!: Observable<Article[]>;
  constructor(private _api: ArticleService) {}

  ngOnInit(): void {
    this.articles$ = this._api.getArticles();
  }
}
