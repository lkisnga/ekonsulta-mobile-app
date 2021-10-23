import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PatientConsultationPage } from './patient-consultation.page';

const routes: Routes = [
  {
    path: '',
    component: PatientConsultationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PatientConsultationPageRoutingModule {}
