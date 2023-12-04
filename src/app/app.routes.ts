import { ListNumbersComponent } from './list-numbers/list-numbers.component';
import { Routes } from '@angular/router';
import { AddNumbersComponent } from './add-numbers/add-numbers.component';

export const routes: Routes = [
  { path: '', redirectTo: 'add-number' , pathMatch: 'full' },
  { path: 'add-number', component: AddNumbersComponent },
  { path: 'list-number', component: ListNumbersComponent }
];
