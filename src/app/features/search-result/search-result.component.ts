import { Component, OnInit } from '@angular/core';
import { SeatBookingService } from '../../core/services/seat-booking.service';
import { Trip } from '../../core/models/trip.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss'],
})
export class SearchResultComponent implements OnInit {
  resultsCount: any;
  tripInfo: any;
  availableBuses: Trip[] | undefined = undefined;
  constructor(
    private bookingService: SeatBookingService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.route.queryParamMap.subscribe((param) => {
      this.tripInfo = this.bookingService.getTripObject();
      this.availableBuses = this.bookingService.getFilteredBuses();
      this.resultsCount = this.availableBuses?.length;
      console.log(this.tripInfo);
    });
  }
}
