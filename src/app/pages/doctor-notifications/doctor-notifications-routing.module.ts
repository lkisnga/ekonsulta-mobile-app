import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DoctorNotificationsPage } from './doctor-notifications.page';

const routes: Routes = [
  {
    path: '',
    component: DoctorNotificationsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoctorNotificationsPageRoutingModule {}
