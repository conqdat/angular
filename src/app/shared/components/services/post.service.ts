import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {PostResponse} from "../../../models/post.model";

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private baseUrl = "http://localhost:8080/api/posts"

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get<PostResponse>(this.baseUrl);
  }

  deletePost(id: number) {
    return this.http.delete(`${this.baseUrl}/` + id, { responseType: 'text' })
  }
}
