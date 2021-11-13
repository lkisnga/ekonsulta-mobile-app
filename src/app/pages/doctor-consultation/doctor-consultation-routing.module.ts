import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DoctorConsultationPage } from './doctor-consultation.page';

const routes: Routes = [
  {
    path: '',
    component: DoctorConsultationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoctorConsultationPageRoutingModule {}
