import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DoctorNotificationsPageRoutingModule } from './doctor-notifications-routing.module';

import { DoctorNotificationsPage } from './doctor-notifications.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DoctorNotificationsPageRoutingModule
  ],
  declarations: [DoctorNotificationsPage]
})
export class DoctorNotificationsPageModule {}
