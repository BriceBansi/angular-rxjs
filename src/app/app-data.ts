import { InMemoryDbService } from 'angular-in-memory-web-api';
import { RestaurantsData } from './restaurant/restaurants-data';
import { RestoCategoryData } from './restau-category/resto-category-data';

export class AppData implements InMemoryDbService {
  createDb(){
    const restaurants = RestaurantsData.restaurants;
    const categoriesResto = RestoCategoryData.categories;
    return {restaurants, categoriesResto};
  }
}