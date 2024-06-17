import { Observable, delay, of } from 'rxjs';

export function validateUsername(username: string): Observable<boolean> {
  console.log('Trigger API call');
  let existedUsers = ['trungvo', 'tieppt', 'chautran'];
  let isValid = existedUsers.every((x) => x !== username);
  return of(isValid).pipe(delay(1000));
}
