import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Post, PostResponse} from "../../models/post.model";
import {HttpClient} from "@angular/common/http";
import {MatPaginator} from "@angular/material/paginator";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  baseUrl = "http://localhost:8080/api/posts"
  posts !: Post[]
  displayedColumns: string[] = ['id', 'title', 'content', 'description'];
  dataSource !:  Post[];
  @ViewChild(MatPaginator) paginator !: MatPaginator;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<PostResponse>(this.baseUrl).subscribe((data) => {
      this.posts = data.content;
      this.dataSource = this.posts
    })
  }
}
