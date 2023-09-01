import {Component, OnInit} from '@angular/core';
import {Observable, of} from "rxjs";
import {ArticleServiceService} from "../article-service.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  articles$: Observable<any> | undefined;

  constructor(private articleService: ArticleServiceService) {
  }
  ngOnInit(): void {
    this.articles$ = this.articleService.articles$
  }


}
