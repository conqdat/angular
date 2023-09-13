import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {SignUpComponent} from "./components/sign-up/sign-up.component";
import {WelcomeComponent} from "./components/welcome/welcome.component";
import {AuthGuard} from "./guards/auth.guard";
import {PostListComponent} from "./components/post-list/post-list.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'welcome', component: WelcomeComponent, canActivate: [AuthGuard] },
  { path: 'posts', component: PostListComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
