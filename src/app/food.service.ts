// src/app/services/food.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  // Simulated food data
  private foodItems = [
    { id: 1, name: 'Pizza', price: 250, category: 'Italian' },
    { id: 2, name: 'Burger', price: 150, category: 'American' },
    { id: 3, name: 'Biryani', price: 200, category: 'Indian' }
  ];

  constructor() {}

  // ✅ Example using Promise (simulating async data fetch like HTTP call)
  getFoodsPromise(): Promise<any[]> {
    return new Promise((resolve, reject) => {
      // Simulate async delay of 1 second
      setTimeout(() => {
        // You can add reject("Something went wrong") to simulate error
        resolve(this.foodItems);
      }, 1000);
    });
  }
}
