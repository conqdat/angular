import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Food} from "../../../shared/models/Food";
import {FoodService} from "../../../services/food.service";

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FoodPageComponent {
  food !: Food;
  constructor(private activatedRoute:ActivatedRoute, private foodService: FoodService) {
    this.activatedRoute.params.subscribe((params) => {
      if(params['id']) {
        this.food = this.foodService.getFoodById(params['id'])
      }
    })
  }
}
