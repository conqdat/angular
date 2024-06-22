import {Component, OnInit} from '@angular/core';
import {CartService} from "../../../services/cart.service";
import {Cart} from "../../../shared/models/Cart";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  cartQuantity=0;
  user!: any;
  constructor(private cartService: CartService) {}

  logout(){  }

  get isAuth(){
    return "";
  }

  ngOnInit(): void {
    this.cartService.getCartObservable().subscribe((cart: Cart) => {
      this.cartQuantity = cart.totalCount;
    });
  }
}
