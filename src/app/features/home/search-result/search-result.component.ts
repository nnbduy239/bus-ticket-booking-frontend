import { Component, OnInit } from '@angular/core';
import { SeatBookingService } from '../../../core/services/seat-booking.service';
import { Journey } from '../../../core/models/journey.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss'],
})
export class SearchResultComponent implements OnInit {
  resultsCount: any;
  journeyInfo: any;
  availableBuses: Journey[] | undefined = undefined;
  constructor(
    private bookingService: SeatBookingService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.route.queryParamMap.subscribe((param) => {
      this.journeyInfo = this.bookingService.getJourneyObject();
      this.availableBuses = this.bookingService.getFilteredBuses();
      this.resultsCount = this.availableBuses?.length;
      console.log(this.journeyInfo);
    });
  }
}
