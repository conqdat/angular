import { Injectable, inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivateFn,
  CanActivateChildFn,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class CanAccessArticle {
  constructor(private readonly authService: AuthService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> {
    return this.authService.currentUser.pipe(
      map((user) => user.articles.includes('bai-viet-1'))
    );
  }

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> {
    console.log(childRoute);
    const slug = childRoute.params['slug'];
    if (!slug) {
      return false;
    }
    return this.authService.currentUser.pipe(
      map((user) => user.articles.includes(slug))
    );
  }

  ArticleGuard: CanActivateFn = (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> => {
    return inject(CanAccessArticle).canActivate(route, state);
  };

  ArticleChildGuard: CanActivateChildFn = (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> => {
    return inject(CanAccessArticle).canActivateChild(route, state);
  };
}
