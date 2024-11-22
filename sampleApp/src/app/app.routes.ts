import { Routes } from '@angular/router';
import { CarModelsComponent } from './components/car-models/car-models.component';
import { CartComponent } from './components/cart/cart.component';
import { HomeComponent } from './components/home/home.component';
import { PartDetailsComponent } from './components/part-details/part-details.component';
import { PartsComponent } from './components/parts/parts.component';

// export const routes: Routes = [
//   {
//     path: '',
//     redirectTo: 'master',
//     pathMatch: 'full',
//   },
//   {
//     path: 'master',
//     component: MasterComponent,
//   },
//   {
//     path: 'employee',
//     component: EmployeeComponent,
//   },
//   {
//     path: 'client',
//     component: ClientComponent,
//   },
// ];

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  { path: 'home', component: HomeComponent }, // Default home page
  { path: 'models', component: CarModelsComponent }, // Ferrari car models
  { path: 'parts/:model', component: PartsComponent }, // Car parts list for a model
  { path: 'part-details/:id', component: PartDetailsComponent }, // Details of a car part
  { path: 'cart', component: CartComponent }, // Cart page
  { path: '**', redirectTo: 'home' }, // Redirect invalid routes to home
];
