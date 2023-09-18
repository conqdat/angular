import {Component, OnChanges, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {NavigationEnd, NavigationStart, Router} from "@angular/router";
import * as events from "events";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLogged = false;
  isPostUrl = false

  constructor(private readonly authService: AuthService,
              private readonly router: Router,
  ) {}

  ngOnInit(): void {
    this.authService.isAuthenticated$.subscribe((isAuthenticated) => {
      this.isLogged = isAuthenticated;
    });
    this.router.events.subscribe((events) => {
      if (events instanceof NavigationEnd) {
        this.isPostUrl = events.url.includes("/posts")
      }
    })
  }

  handleLogout() {
    this.authService.logout();
    this.isLogged = false
  }
}
