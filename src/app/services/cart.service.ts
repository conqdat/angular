import { Injectable } from '@angular/core';
import {Cart} from "../shared/models/Cart";
import {BehaviorSubject, Observable, Subject} from "rxjs";
import {Food } from "../shared/models/Food";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Cart;
  private cartSubject: BehaviorSubject<Cart> = new BehaviorSubject<Cart>(this.cart);
  constructor() { }

  addToCart(food: Food) {
    let cartItem = this.cart.items.find(item => item.food.id === food.id);
    if(cartItem) return
    this.cart.items.push(cartItem);
  }

  removeFromCart(foodId: string) {
    this.cart.items = this.cart.items.filter(item => item.food.id !== foodId);
  }

  changQuantity(quantity: number, foodId: string) {
    let cartItem= this.cart.items.find(item => item.food.id === foodId);
    if(!cartItem) return
    cartItem.quantity = quantity;
    cartItem.price = quantity * cartItem.food.price;
  }

  clearCart() {
    this.cart = new Cart();
  }

  getCartObservable(): Observable<Cart> {
    return this.cartSubject.asObservable();
  }
}