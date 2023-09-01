import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import {NoWhiteValidator} from "../shared/no-white.validator";

@Component({
  selector: 'app-sign-in-rf',
  templateUrl: './sign-in-rf.component.html',
  styleUrls: ['./sign-in-rf.component.css']
})
export class SignInRfComponent implements OnInit {

  constructor(private fb: FormBuilder) {}

  // signInForm = new FormGroup({
  //   username: new FormControl("", [Validators.required, Validators.minLength(5)]),
  //   password: new FormControl(""),
  //   rememberMe: new FormControl("")
  // })

  signInForm = this.fb.group({
    username: ["", Validators.minLength(5)],
    password: ["",
        Validators.compose([
          NoWhiteValidator(),
          Validators.minLength(6),
        ])],
    rememberMe: ""
  })

  ngOnInit(): void {
    // this.signInForm.setValue({
    //   username: "username",
    //   password: "password",
    //   rememberMe: ""
    // })
  }

  handleSubmit() {
    console.log(this.signInForm.value)
  }
}
