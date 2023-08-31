import { Injectable } from '@angular/core';
import * as data from '../../../assets/routes.json';
import { Journey } from '../models/journey.model';
@Injectable({
  providedIn: 'root',
})
export class SeatBookingService {
  journey: any;
  buses: Journey[] = (data as any).default;
  localJourney: any = JSON.parse(localStorage.getItem('searchInput')!);
  constructor() {}
  getFilteredBuses() {
    if (this.journey) {
      return this.buses.filter((bus) => {
        return (
          bus.Destination === this.journey.destination &&
          bus.Source === this.journey.sourceLocation &&
          bus.SeatsAvailable >= +this.journey.numberOfSeats
        );
      });
    } else return undefined;
  }
  getJourneyObject() {
    // const localJourney = JSON.parse(localStorage.getItem('searchInput')!);
    return this.journey;
  }

  setJourneyEndpoints(journey: any) {
    this.journey = journey;
    localStorage.setItem('searchInput', JSON.stringify(journey));
  }

  getSourceCities() {
    return [...new Set(this.buses.map((route) => route.Source))];
  }
  getDestinationCities() {
    return [...new Set(this.buses.map((route) => route.Destination))];
  }
}
