import {Component, OnInit} from '@angular/core';
import {CartService} from "../../../services/cart.service";
import {Cart} from "../../../shared/models/Cart";
import {UserService} from "../../../services/user.service";
import {User} from "../../../shared/models/User";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  cartQuantity=0;
  user!: User;

  constructor(private cartService: CartService, private userService: UserService) {
    this.cartService.getCartObservable().subscribe((cart: Cart) => {
      this.cartQuantity = cart.totalCount;
    });
    userService.userObservable.subscribe((user: User) => {
      this.user = user;
    })
  }


  get isAuth(){
    return this.user.token;
  }

  ngOnInit(): void {}

  logout() {
    this.userService.logout();
  }
}
	
