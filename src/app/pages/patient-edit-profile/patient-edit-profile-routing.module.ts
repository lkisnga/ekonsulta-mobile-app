import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PatientEditProfilePage } from './patient-edit-profile.page';

const routes: Routes = [
  {
    path: '',
    component: PatientEditProfilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PatientEditProfilePageRoutingModule {}
