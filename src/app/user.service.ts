import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl: string = 'https://jsonplaceholder.typicode.com/users'

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(this.baseUrl)
  }
}
