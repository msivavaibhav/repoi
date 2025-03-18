import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { FoodService } from '../food.service';


@Component({
  selector: 'app-food-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './food-detail.component.html',
})
export class FoodDetailComponent implements OnInit {
  foodId: number = 0;
  foodItem: any;

  constructor(private route: ActivatedRoute, private foodService: FoodService) {}

  ngOnInit(): void {
    this.foodId = Number(this.route.snapshot.paramMap.get('id'));
    const foods = this.foodService.getLocalFoods();
    this.foodItem = foods.find(f => f.id === this.foodId);
  }
}
