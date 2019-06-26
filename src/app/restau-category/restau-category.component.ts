import { Component, OnInit } from '@angular/core';
import { RestoCategoryService } from './resto-category.service';
import { RestoCategory } from './resto-category';
import { combineLatest, Observable, ReplaySubject, throwError } from 'rxjs';

@Component({
  selector: 'app-restau-category',
  templateUrl: './restau-category.component.html',
  styleUrls: ['./restau-category.component.css']
})
export class RestauCategoryComponent implements OnInit {

  categoryRestos$: Observable<RestoCategory[]>;
  constructor(private categoryService: RestoCategoryService) { }

  ngOnInit() {
    this.categoryRestos$ = this.categoryService.categoryResto$;
  }

}