import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private http: HttpClient) {}

  // Dummy Static Data
  getLocalFoods() {
    return [
      { id: 1, name: 'Pizza', price: 250, category: 'Italian' },
      { id: 2, name: 'Burger', price: 150, category: 'American' },
      { id: 3, name: 'Biryani', price: 200, category: 'Indian' }
    ];
  }

  // Dummy API Call
  getPosts(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }
}
