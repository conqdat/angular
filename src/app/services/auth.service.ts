import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
import {BehaviorSubject, Observable} from "rxjs";
const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = 'http://localhost:8080'
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);

  isAuthenticated$: Observable<boolean> = this.isAuthenticatedSubject.asObservable();

  constructor(private http: HttpClient, private router: Router) { }

  register(data: any) {
    return this.http.post(`${this.baseUrl}/api/auth/register`, data, { headers })
  }

  login(data: any) {
    return this.http.post(`${this.baseUrl}/api/auth/login`, data, { headers })
  }

  public isLoggedIn(): boolean {
    let token = localStorage.getItem('token');
    return token != null && token.length > 0;
  }

  public logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  public getToken(): string | null {
    return this.isLoggedIn() ? localStorage.getItem('token') : null;
  }

  setAuthenticated(isAuthenticated: boolean) {
    this.isAuthenticatedSubject.next(isAuthenticated);
  }

}
