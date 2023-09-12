import { Component } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private fb: FormBuilder, private authService: AuthService) {
  }

  loginForm = this.fb.group({
    'usernameOrEmail': '',
    'password': ''
  })

  handleSubmit() {
    return this.authService.login(this.loginForm.value).subscribe((data: any) => {
      localStorage.setItem('token', data.accessToken)
    })
  }
}
