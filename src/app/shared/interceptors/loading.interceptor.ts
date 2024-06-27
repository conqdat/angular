import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpEventType
} from '@angular/common/http';
let pendingRequest = 0
import {Observable, tap} from 'rxjs';
import {LoadingService} from "../../services/loading.service";

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {

  constructor(private loadingService: LoadingService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.loadingService.showLoading();
    pendingRequest = pendingRequest + 1;
    return next.handle(request).pipe(
      tap({
        next: (event) => {
          if(event.type === HttpEventType.Response) {
            this.handleHideLoading();
          }
        },
        error: () => {
          this.handleHideLoading();
        }
      })
    );
  }

  handleHideLoading() {
    pendingRequest = pendingRequest - 1;
    if(pendingRequest <= 1) {
      this.loadingService.hideLoading();
    }
  }
}
