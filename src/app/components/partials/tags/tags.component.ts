import { Component } from '@angular/core';
import {Tag} from "../../../shared/models/Tag";
import {FoodService} from "../../../services/food.service";
import {sample_tags} from "../../../../data";
import {Observable} from "rxjs";

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent {
  tags !: Tag[];
  constructor(private foodService: FoodService) {
    this.foodService.getAllTags().subscribe((tags: Tag[]) => {
      this.tags = tags;
    });
  }
}
