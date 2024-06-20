import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  cartQuantity=0;
  user!: any;
  constructor() {}


  logout(){  }

  get isAuth(){
    return "";
  }
}
