import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, tap} from "rxjs";
import {User} from "../shared/models/User";
import {IUserLogin} from "../shared/interfaces/IUserLogin";
import {HttpClient} from "@angular/common/http";
import {USER_LOGIN_URL} from "../shared/constants/urls";
import {ToastrService} from "ngx-toastr";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userSubject = new BehaviorSubject(new User());
  public userObservable: Observable<User>

  constructor(private http: HttpClient, private toastService: ToastrService) {
    this.userObservable = this.userSubject.asObservable();
  }

  login(userLogin: IUserLogin): Observable<User> {
    return this.http.post<User>(USER_LOGIN_URL, userLogin).pipe(
      tap({
        next: (user) => {
          this.userSubject.next(user);
          this.toastService.success(`Welcome ${user.name} to Food App`);
        },
        error: (err) => {
          this.toastService.error('Failed to Login');
        }
      })
    )
  }
}
