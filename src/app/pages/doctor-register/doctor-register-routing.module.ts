import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DoctorRegisterPage } from './doctor-register.page';

const routes: Routes = [
  {
    path: '',
    component: DoctorRegisterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoctorRegisterPageRoutingModule {}
