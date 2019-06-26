import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';


import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { InMemoryDataService } from './in-memory-data.service';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { RestaurantService } from './restaurant/restaurant.service';
import { AppData } from './app-data';
import { RestauCategoryComponent } from './restau-category/restau-category.component';
import { RestoCategoryService } from './restau-category/resto-category.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule, HttpClientInMemoryWebApiModule.forRoot(
  AppData, { dataEncapsulation: false }
) ],
  declarations: [ AppComponent, HelloComponent, RestaurantComponent, RestauCategoryComponent ],
  bootstrap:    [ AppComponent ],
  providers: [InMemoryDataService, RestaurantService, RestoCategoryService]
})
export class AppModule { }
