import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, NgForm} from "@angular/forms";

@Component({
  selector: 'app-sign-in-rf',
  templateUrl: './sign-in-rf.component.html',
  styleUrls: ['./sign-in-rf.component.css']
})
export class SignInRfComponent implements OnInit {

  constructor(private fb: FormBuilder) {}

  // signInForm = new FormGroup({
  //   username: new FormControl(""),
  //   password: new FormControl(""),
  //   rememberMe: new FormControl("")
  // })

  signInForm = this.fb.group({
    username: "",
    password: "",
    rememberMe: ""
  })

  ngOnInit(): void {
    this.signInForm.setValue({
      username: "username",
      password: "password",
      rememberMe: ""
    })
  }

  handleSubmit() {
    console.log(this.signInForm.value)
  }
}
