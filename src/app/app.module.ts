import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/layout/header/header.component';
import { HomeComponent } from './features/home/home.component';
import { HomeSearchComponent } from './features/home-search/home-search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material/material.module';
import { SearchResultComponent } from './features/search-result/search-result.component';

import { SeatMapComponent } from './shared/component/seat-map/seat-map.component';

import { AvailableBusesComponent } from './features/available-buses/available-buses.component';
import { SeatSelectionComponent } from './features/available-buses/trip-preview/seat-selection/seat-selection.component';
import { TripPreviewComponent } from './features/available-buses/trip-preview/trip-preview.component';
import { SearchFilterComponent } from './features/search-result/search-filter/search-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    HomeSearchComponent,
    SearchResultComponent,
    TripPreviewComponent,
    SeatMapComponent,
    SeatSelectionComponent,
    AvailableBusesComponent,
    SearchFilterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
