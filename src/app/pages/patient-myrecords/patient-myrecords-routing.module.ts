import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PatientMyrecordsPage } from './patient-myrecords.page';

const routes: Routes = [
  {
    path: '',
    component: PatientMyrecordsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PatientMyrecordsPageRoutingModule {}
