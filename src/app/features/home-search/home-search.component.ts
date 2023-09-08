import { Component } from '@angular/core';
import {
  AbstractControlOptions,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { SeatBookingService } from '../../core/services/seat-booking.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home-search',
  templateUrl: './home-search.component.html',
  styleUrls: ['./home-search.component.scss'],
})
export class HomeSearchComponent {
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
  }
  get formControl() {
    return this.journeyInfo.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.journeyInfo.invalid) return;
    this.bookingService.setTripEndpoints(this.journeyInfo.value);
    this.router.navigate(['dat-ve']);
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
