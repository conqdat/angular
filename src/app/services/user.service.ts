import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, take, tap } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  URL = 'https://jsonplaceholder.typicode.com/users';
  constructor(private http: HttpClient) {}

  getUser(id: string): Observable<User> {
    return this.http.get<User>(`${this.URL}/${id}`);
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.URL).pipe(tap((res) => console.log(res)));
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(this.URL, user);
  }
}
