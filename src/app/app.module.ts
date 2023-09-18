import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QRCodeModule } from 'angularx-qrcode';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import {MatInputModule} from "@angular/material/input";
import {MatCardModule} from "@angular/material/card";
import {ReactiveFormsModule} from "@angular/forms";
import { WelcomeComponent } from './components/welcome/welcome.component';
import {TokenInterceptorInterceptor} from "./interceptors/token-interceptor.interceptor";
import { PostListComponent } from './components/post-list/post-list.component';
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import { EditConfirmComponent } from './shared/components/edit-confirm/edit-confirm.component';
import {MatDialogModule} from "@angular/material/dialog";
import { DeleteConfirmComponent } from './shared/components/delete-confirm/delete-confirm.component';
import {MAT_SNACK_BAR_DEFAULT_OPTIONS, MatSnackBarModule} from "@angular/material/snack-bar";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    SignUpComponent,
    WelcomeComponent,
    PostListComponent,
    EditConfirmComponent,
    DeleteConfirmComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        QRCodeModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatIconModule,
        MatToolbarModule,
        MatButtonModule,
        MatInputModule,
        MatCardModule,
        ReactiveFormsModule,
        MatTableModule,
        MatPaginatorModule,
        MatDialogModule,
        MatSnackBarModule
    ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorInterceptor, multi: true },
    { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: { panelClass: ['custom_dialog'] },}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
