import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PatientDoctorChatPage } from './patient-doctor-chat.page';

const routes: Routes = [
  {
    path: '',
    component: PatientDoctorChatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PatientDoctorChatPageRoutingModule {}
