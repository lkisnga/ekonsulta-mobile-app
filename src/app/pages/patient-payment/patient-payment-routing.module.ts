import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PatientPaymentPage } from './patient-payment.page';

const routes: Routes = [
  {
    path: '',
    component: PatientPaymentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PatientPaymentPageRoutingModule {}
