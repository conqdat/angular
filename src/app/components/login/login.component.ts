import {Component} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(
    private readonly fb: FormBuilder,
    private readonly authService: AuthService,
    private readonly router: Router,
    private _snackBar: MatSnackBar
  ) {}

  loginForm = this.fb.group({
    'usernameOrEmail': '',
    'password': ''
  })

  handleSubmit() {
    return this.authService.login(this.loginForm.value).subscribe(
      (data: any) => {
        localStorage.setItem('token', data.accessToken);
        this._snackBar.open("Login successful !", "OK", {
          verticalPosition: "top",
          horizontalPosition: "center",
        });
        this.authService.setAuthenticated(true);
        this.router.navigate(['/posts']);
      },
      (error: any) => {
        // Handle login error here
        console.error("Login failed:", error);
        this._snackBar.open("Login failed. Please check your credentials.", "OK", {
          verticalPosition: "top",
          horizontalPosition: "center",
        });
      }
    );
  }

}
