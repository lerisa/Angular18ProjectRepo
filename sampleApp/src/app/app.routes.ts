import { Routes } from '@angular/router';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ModelListComponent } from './components/model-list/model-list.component';
import { PartDetailsComponent } from './components/part-details/part-details.component';

export const routes: Routes = [
  {
    path: '',
    component: ModelListComponent,
    //  redirectTo: '',
    // pathMatch: 'full',
  },
  { path: 'model/:modelName', component: PartDetailsComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: '**', redirectTo: '' },
];
