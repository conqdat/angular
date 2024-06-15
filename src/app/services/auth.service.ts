import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  get currentUser() {
    return of({ userName: 'Dat', articles: ['bai-viet-1'] });
  }
}
