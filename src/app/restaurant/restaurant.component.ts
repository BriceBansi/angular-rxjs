import { Component, OnInit } from '@angular/core';
import { RestaurantService } from './restaurant.service';
import { combineLatest, Observable, ReplaySubject, throwError, of } from 'rxjs';
import { Restaurant } from './restaurant';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {
  restaurants$: Observable<Restaurant>;

  constructor(private restoService: RestaurantService) { }

  ngOnInit() {
    this.restaurants$ = this.restoService.restaurants$
  

  }

}