import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PatientNotificationsPageRoutingModule } from './patient-notifications-routing.module';

import { PatientNotificationsPage } from './patient-notifications.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PatientNotificationsPageRoutingModule
  ],
  declarations: [PatientNotificationsPage]
})
export class PatientNotificationsPageModule {}
