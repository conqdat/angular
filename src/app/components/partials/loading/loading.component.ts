import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {LoadingService} from "../../../services/loading.service";

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent {
  isLoading !: boolean;

  constructor(private loadingService : LoadingService) {
    loadingService.isLoading.subscribe((isLoading) => {
      this.isLoading = isLoading;
    })
  }
}
