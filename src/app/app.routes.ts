import { Routes } from '@angular/router';
import { FoodDetailComponent } from './food-detail/food-detail.component';
import { FoodListComponent } from './food-list/food-list.component';


export const routes: Routes = [
  { path: '', component: FoodListComponent },
  { path: 'details/:id', component: FoodDetailComponent }
];
