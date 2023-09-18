import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Post, PostResponse} from "../../models/post.model";
import {HttpClient} from "@angular/common/http";
import {MatPaginator} from "@angular/material/paginator";
import {MatDialog} from "@angular/material/dialog";
import {EditConfirmComponent} from "../../shared/components/edit-confirm/edit-confirm.component";
import {DeleteConfirmComponent} from "../../shared/components/delete-confirm/delete-confirm.component";
import {PostService} from "../../shared/components/services/post.service";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts !: Post[]
  displayedColumns: string[] = ['id', 'title', 'content', 'description', 'actions'];
  dataSource !:  Post[];
  @ViewChild(MatPaginator) paginator !: MatPaginator;

  constructor(private http: HttpClient, public dialog: MatDialog, private postService: PostService) {}

  openDialog(id: number) {
    const dialogDelete = this.dialog.open(DeleteConfirmComponent, {
      data: { postId: id }
    });
    dialogDelete.afterClosed().subscribe(result => {
      this.loadPosts()
    })
  }

  private loadPosts() {
    this.postService.getPosts().subscribe((data: PostResponse) => {
      this.posts = data.content;
      this.dataSource = this.posts
    })
  }

  ngOnInit(): void {
    this.loadPosts()
  }
}
