import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../models/user.model';
import { Router } from '@angular/router';
import { createNewUser } from '../utils/hepler';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  constructor(
    private readonly userService: UserService,
    private router: Router
  ) {}
  users!: User[];
  fakeUser = createNewUser();
  displayedColumns: string[] = ['id', 'name', 'username', 'email'];

  ngOnInit(): void {
    this.onGetUsers();
  }

  onGetUsers() {
    this.userService.getUsers().subscribe(
      (res: User[]) => (this.users = res),
      (err: any) => console.log(err),
      () => console.log('Done get Users')
    );
  }

  onCreateUser() {
    this.userService.createUser(this.fakeUser).subscribe(
      (res: User) => console.log(res),
      (err: any) => console.log(err),
      () => console.log('Done get Users')
    );
  }

  onGetUser(id: string) {
    this.router.navigate(['/user', id]);
  }
}
