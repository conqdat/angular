import {Component, EventEmitter, Inject, OnInit, Output} from '@angular/core';
import {PostService} from "../services/post.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Form, FormBuilder, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-edit-confirm',
  templateUrl: './edit-confirm.component.html',
  styleUrls: ['./edit-confirm.component.css']
})
export class EditConfirmComponent implements OnInit {

  @Output() updatePosts = new EventEmitter<void>();

  currentPost: any
  editForm = this.fb.group({
    title: new FormControl(''), // Initial empty value
    content: new FormControl(''), // Initial empty value
    description: new FormControl(''), // Initial empty value
    categoryId: new FormControl(''), // Initial empty value
  });

  constructor(
    private postService: PostService,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: { postId: number },
    private dialogRef: MatDialogRef<EditConfirmComponent>
  )
  {}

  ngOnInit(): void {
    this.postService.getPostById(this.data.postId).subscribe(data => {
      this.currentPost = data
      this.updateEditFormValues();
    })
  }

  updateEditFormValues() {
    if (this.currentPost) {
      this.editForm.patchValue({
        title: this.currentPost.title,
        content: this.currentPost.content,
        description: this.currentPost.description,
        categoryId: this.currentPost.categoryId
      });
    }
  }

  handleSubmit(form: FormGroup) {
    this.postService.updatePost(this.data.postId, form.value).subscribe((something) => {
      this.updatePosts.emit();
      this.dialogRef.close();
    })
  }


}
