import {Component} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(
    private readonly fb: FormBuilder,
    private readonly authService: AuthService,
    private readonly router: Router
  ) {}

  loginForm = this.fb.group({
    'usernameOrEmail': '',
    'password': ''
  })

  handleSubmit() {
    return this.authService.login(this.loginForm.value).subscribe((data: any) => {
      localStorage.setItem('token', data.accessToken)
      this.authService.setAuthenticated(true)
      this.router.navigate(['/posts'])
    })
  }
}
