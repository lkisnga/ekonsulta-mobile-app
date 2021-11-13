import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DoctorEditProfilePageRoutingModule } from './doctor-edit-profile-routing.module';

import { DoctorEditProfilePage } from './doctor-edit-profile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DoctorEditProfilePageRoutingModule
  ],
  declarations: [DoctorEditProfilePage]
})
export class DoctorEditProfilePageModule {}
