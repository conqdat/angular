import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {PostService} from "../services/post.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-delete-confirm',
  templateUrl: './delete-confirm.component.html',
  styleUrls: ['./delete-confirm.component.css']
})
export class DeleteConfirmComponent {

  constructor(
    private postService: PostService,
    public dialogRef: MatDialogRef<DeleteConfirmComponent>,
    private _snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: { postId: number }
  ) {
  }

  handleDeletePost() {
    this.postService.deletePost(this.data.postId).subscribe(result => {
      this._snackBar.open("Deleted successful !", "OK", {
        verticalPosition: "top",
        horizontalPosition: "center",
      })
      this.postService.getPosts()
    })
  }
}
