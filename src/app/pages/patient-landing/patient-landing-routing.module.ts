import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PatientLandingPage } from './patient-landing.page';

const routes: Routes = [
  {
    path: '',
    component: PatientLandingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PatientLandingPageRoutingModule {}
