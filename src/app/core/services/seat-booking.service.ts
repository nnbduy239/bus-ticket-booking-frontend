import { Injectable } from '@angular/core';
import * as data from '../../../assets/routes.json';
import { Trip } from '../models/trip.model';
@Injectable({
  providedIn: 'root',
})
export class SeatBookingService {
  trip: any;
  buses: Trip[] = (data as any).default;
  localJourney: any = JSON.parse(localStorage.getItem('searchInput')!);
  constructor() {}
  getFilteredBuses() {
    if (this.trip) {
      return this.buses.filter((bus) => {
        return (
          bus.Destination === this.trip.destination &&
          bus.Source === this.trip.sourceLocation &&
          bus.SeatsAvailable >= +this.trip.numberOfSeats
        );
      });
    } else return undefined;
  }
  getTripObject() {
    return this.trip;
  }

  setTripEndpoints(trip: any) {
    this.trip = trip;
  }

  getSourceCities() {
    return [...new Set(this.buses.map((route) => route.Source))];
  }
  getDestinationCities() {
    return [...new Set(this.buses.map((route) => route.Destination))];
  }
}
