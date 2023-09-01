import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ArticleServiceService} from "../article-service.service";
import {filter, Observable, pluck, switchMap} from "rxjs";

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent implements OnInit {
  article$ !: Observable<any>;
  constructor(private route: ActivatedRoute, private articleService: ArticleServiceService) {}

  ngOnInit() {
    this.article$ = this.route.params.pipe(
      pluck('slug'),
      switchMap(slug => this.articleService.getArticle(slug)),
      filter(article => !!article)
    )
  }
}
