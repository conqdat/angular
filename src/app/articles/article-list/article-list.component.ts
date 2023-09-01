import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {ArticleServiceService} from "../../article-service.service";

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent {
  articles$: Observable<any> | undefined;

  constructor(private articleService: ArticleServiceService) {
  }
  ngOnInit(): void {
    this.articles$ = this.articleService.articles$
  }
}
