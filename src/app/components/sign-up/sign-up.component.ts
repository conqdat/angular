import {Component} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})



export class SignUpComponent {
  hide = true;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private authService: AuthService
  ) {}

  signUpForm = this.fb.group({
    "username": ["", Validators.required],
    "password": ["", Validators.required],
    "name": ["", Validators.required],
    "email": ["", Validators.compose([
      Validators.required,
      Validators.email
    ])]
  })

  handleSubmit() {
    this.authService.register(this.signUpForm.value).subscribe((data) => {
      console.log("sign-up: " + data)
      this.router.navigate(['/login'])
    })
  }


}
