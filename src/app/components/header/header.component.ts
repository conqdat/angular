import { Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLogged = false;

  constructor(private readonly authService: AuthService) {}

  ngOnInit(): void {
    this.authService.isAuthenticated$.subscribe((isAuthenticated) => {
      this.isLogged = isAuthenticated;
    });
  }

  handleLogout() {
    this.authService.logout();
    this.isLogged = false
  }
}
