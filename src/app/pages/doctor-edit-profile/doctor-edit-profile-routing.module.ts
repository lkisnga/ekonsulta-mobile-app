import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DoctorEditProfilePage } from './doctor-edit-profile.page';

const routes: Routes = [
  {
    path: '',
    component: DoctorEditProfilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoctorEditProfilePageRoutingModule {}
