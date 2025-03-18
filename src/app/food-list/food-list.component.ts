import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-food-list',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  searchTerm: string = ''; // Two-way bound to input field
  foodItems = [
    { id: 1, name: 'Pizza', price: 250, category: 'Italian' },
    { id: 2, name: 'Burger', price: 150, category: 'American' },
    { id: 3, name: 'Biryani', price: 200, category: 'Indian' }
  ];

  ngOnInit() {}

  // Filtered food items based on the search term
  get filteredFoodItems() {
    return this.foodItems.filter(item => 
      item.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
