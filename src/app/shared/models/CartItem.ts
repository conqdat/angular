import {Food} from "./Food";

export class CartItem {
  constructor(public food: Food) {}
  quantity !: number;
  price !: number = this.food.price;
}
