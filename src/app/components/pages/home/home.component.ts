import { Component } from '@angular/core';
import {FoodService} from "../../../services/food.service";
import {Food} from "../../../shared/models/Food";
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  foods !: Food[];
  constructor(private foodService: FoodService, private activatedRoute: ActivatedRoute) {
    let foodObservable: Observable<Food[]>;
    activatedRoute.params.subscribe(params => {
      if (params['searchTerm']) {
        foodObservable = this.foodService.getAllFoodsBySearchTerm(params['searchTerm']);
      } else if(params['tag']) {
        foodObservable = this.foodService.getAllFoodsByTag(params['tag']);
      } else {
        foodObservable = this.foodService.getAllFoods()
      }
      foodObservable.subscribe(foods => {
        this.foods = foods;
      })
    })
  }

}
