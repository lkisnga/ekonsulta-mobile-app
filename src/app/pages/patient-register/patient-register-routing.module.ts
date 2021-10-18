import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PatientRegisterPage } from './patient-register.page';

const routes: Routes = [
  {
    path: '',
    component: PatientRegisterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PatientRegisterPageRoutingModule {}
