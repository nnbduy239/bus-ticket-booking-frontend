import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seat-selection',
  templateUrl: './seat-selection.component.html',
  styleUrls: ['./seat-selection.component.scss'],
})
export class SeatSelectionComponent implements OnInit {
  ngOnInit(): void {}
  cart!: any;

  buyTicket() {
    console.log('work');
  }
  receivedSelectSeat(data: any) {
    this.cart = data;
    console.log(this.cart);
  }
}
