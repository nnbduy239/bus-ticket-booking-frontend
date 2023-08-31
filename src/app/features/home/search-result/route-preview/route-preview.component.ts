import { Component, Input } from '@angular/core';
import { Journey } from '../../../../core/models/journey.model';

@Component({
  selector: 'app-route-preview',
  templateUrl: './route-preview.component.html',
  styleUrls: ['./route-preview.component.scss'],
})
export class RoutePreviewComponent {
  @Input() journey!: Journey;
}
