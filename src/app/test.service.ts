import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
export class TestService {

  constructor() {
  }

  test(value: any) {
    console.log("Test: " + value)
  }
}
