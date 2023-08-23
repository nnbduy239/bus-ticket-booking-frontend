import { NgModule } from '@angular/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatRadioModule } from '@angular/material/radio';
const MaterialComponents = [MatRadioModule];
@NgModule({
  imports: [MatRadioModule],
  exports: [MatRadioModule],
})
export class MaterialModule {}
