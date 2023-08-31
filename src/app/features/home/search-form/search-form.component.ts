import { Component } from '@angular/core';
import {
  AbstractControlOptions,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { SeatBookingService } from '../../../core/services/seat-booking.service';
import { ActivatedRoute, Router } from '@angular/router';
import { tap } from 'rxjs';
@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss'],
})
export class SearchFormComponent {
  journeyInfo: FormGroup = this.formBuilder.group({});
  submitted: boolean = false;
  sourceCities: string[] = [];
  destinationCities: string[] = [];
  currentDate = new Date();
  visible: boolean = false;
  DEFAULT_SELECT_VALUE = 1;
  tickets: number[] = [1, 2, 3, 4, 5];
  constructor(
    private formBuilder: FormBuilder,
    private bookingService: SeatBookingService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.sourceCities = this.bookingService.getSourceCities();
    this.destinationCities = this.bookingService.getDestinationCities();
    const localJourney = JSON.parse(localStorage.getItem('searchInput')!);
    this.journeyInfo = this.formBuilder.group(
      {
        sourceLocation: ['', Validators.required],
        destination: ['', Validators.required],
        departureDate: ['', Validators.required],
        numberOfSeats: ['', Validators.required],
      },
      {
        validators: [this.validDate('departureDate')],
      } as AbstractControlOptions
    );
    this.journeyInfo.valueChanges.subscribe((value) => {
      localStorage.setItem(
        'searchInput',
        JSON.stringify(this.journeyInfo.value)
      );
    });
  }
  get formControl() {
    return this.journeyInfo.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.journeyInfo.invalid) return;
    this.bookingService.setJourneyEndpoints(this.journeyInfo.value);
    this.router.navigate(['dat-ve'], {
      queryParams: {
        from: this.journeyInfo.value.sourceLocation,
        to: this.journeyInfo.value.destination,
        fromTime: this.journeyInfo.value.departureDate,
        ticketCount: this.journeyInfo.value.numberOfSeats,
      },
      queryParamsHandling: 'merge',
    });
  }

  validDate(date: string) {
    return (formGroup: FormGroup) => {
      const dateControl = formGroup.controls[date];
      const journeydate = new Date(dateControl.value);
      const currentdate = new Date();
      currentdate.setHours(0, 0, 0, 0);
      if (journeydate.getTime() < currentdate.getTime()) {
        dateControl.setErrors({
          oldDate: true,
        });
      }
    };
  }
}
