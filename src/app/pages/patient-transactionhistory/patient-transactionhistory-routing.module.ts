import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PatientTransactionhistoryPage } from './patient-transactionhistory.page';

const routes: Routes = [
  {
    path: '',
    component: PatientTransactionhistoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PatientTransactionhistoryPageRoutingModule {}
