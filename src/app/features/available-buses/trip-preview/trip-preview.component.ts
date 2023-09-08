import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Trip } from '../../core/models/trip.model';
import { MatMenu } from '@angular/material/menu';

@Component({
  selector: 'app-trip-preview',
  templateUrl: './trip-preview.component.html',
  styleUrls: ['./trip-preview.component.scss'],
})
export class TripPreviewComponent implements OnInit {
  @Input() trip!: Trip;
  ngOnInit(): void {}
}
