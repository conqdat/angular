import { Injectable } from '@angular/core';
import {map, of, shareReplay} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ArticleServiceService {

  constructor() { }

  get articles$() {
    return of(
      [
        { title: 'title 1', body: 'body 1', slug: 'title-1' },
        { title: 'title 2', body: 'body 2', slug: 'title-2' },
      ]
    ).pipe(shareReplay(1))
  }

  getArticle(slug: string) {
    return this.articles$.pipe(map(articles => articles.find(ar => ar.slug == slug)))
  }
}
