import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { SearchResultComponent } from './features/search-result/search-result.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [{ path: 'dat-ve', component: SearchResultComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
