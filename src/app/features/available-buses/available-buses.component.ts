import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-available-buses',
  templateUrl: './available-buses.component.html',
  styleUrls: ['./available-buses.component.scss'],
})
export class AvailableBusesComponent {
  @Input() buses!: any;
  @Input() trip!: any;
}
