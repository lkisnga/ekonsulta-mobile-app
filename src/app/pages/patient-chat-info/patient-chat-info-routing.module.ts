import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PatientChatInfoPage } from './patient-chat-info.page';

const routes: Routes = [
  {
    path: '',
    component: PatientChatInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PatientChatInfoPageRoutingModule {}
