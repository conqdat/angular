import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private isLoadingSubject: Subject<boolean> = new Subject<boolean>();
  constructor() {}

  showLoading(): void {
    this.isLoadingSubject.next(true);
  }
  hideLoading(): void {
    this.isLoadingSubject.next(false);
  }

  get isLoading() {
    return this.isLoadingSubject.asObservable();
  }
}
