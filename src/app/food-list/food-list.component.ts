// src/app/food-list/food-list.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-food-list',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  searchTerm: string = ''; // Two-way bound to input field
  foodItems: any[] = [];   // Stores food list from service
  isLoading: boolean = true;

  constructor(private foodService: FoodService) {}

  ngOnInit(): void {
    this.loadFoods(); // Load foods using async/await
  }

  // ✅ Using async/await to fetch data from Promise
  async loadFoods() {
    try {
      // Show loading indicator
      this.isLoading = true;

      // Wait for Promise to resolve from service
      this.foodItems = await this.foodService.getFoodsPromise();

      // Hide loading indicator
      this.isLoading = false;
    } catch (error) {
      console.error('Error loading foods:', error);
    }
  }

  // Filtered food items based on search term
  get filteredFoodItems() {
    return this.foodItems.filter(item =>
      item.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
