import { Injectable } from '@angular/core';
import {Food} from "../shared/models/Food";
import {sample_foods, sample_tags} from "../../data";
import {Tag} from "../shared/models/Tag";

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  constructor() { }

  getAllFoods(): Food[] {
    return sample_foods;
  }

  getAllFoodsBySearchTerm(searchTerm: string): Food[] {
    return this.getAllFoods().filter(food => food.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }

  getAllTags(): Tag[] {
    return sample_tags;
  }

  getAllFoodsByTag(tag: string): Food[] {
    return tag === 'All' ? this.getAllFoods() : this.getAllFoods()
      .filter(food => food?.tags?.includes(tag));
  }

  getFoodById(id: string): Food {
    return this.getAllFoods().find(food => food.id === id) || new Food();
  }
}
