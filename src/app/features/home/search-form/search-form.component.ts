import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss'],
})
export class SearchFormComponent {
  myControl = new FormControl('');
  options: string[] = ['One', 'Two', 'Three'];
  tickets: number[] = [1, 2, 3, 4, 5];
}
