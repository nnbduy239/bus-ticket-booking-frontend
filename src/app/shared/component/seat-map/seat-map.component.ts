import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import * as data from '../../../../assets/seats.json';
@Component({
  selector: 'app-seat-map',
  templateUrl: './seat-map.component.html',
  styleUrls: ['./seat-map.component.scss'],
})
export class SeatMapComponent implements OnInit {
  @Output() cartData: EventEmitter<any> = new EventEmitter<any>();
  seatmap: any[] = (data as any).default;
  cart: any = {
    selectedSeats: [],
    totalAmount: 0,
  };

  ngOnInit(): void {}
  selectSeat(seat: any) {
    if (seat.status === 'available') {
      seat.status = 'booked';
      this.cart.selectedSeats.push(seat.seat_number);
      this.cart.totalAmount += seat.price;
    } else if (seat.status === 'booked') {
      seat.status = 'available';
      const seatIndex = this.cart.selectedSeats.indexOf(seat.seat_number);
      if (seatIndex > -1) {
        this.cart.selectedSeats.splice(seatIndex, 1);
        this.cart.totalAmount -= seat.price;
      }
    }
    this.cartData.emit(this.cart);
    console.log(this.cart);
  }
  // selectSeat(seat: any) {
  //   console.log(seat);
  // }
}
