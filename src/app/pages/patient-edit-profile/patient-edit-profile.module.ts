import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PatientEditProfilePageRoutingModule } from './patient-edit-profile-routing.module';

import { PatientEditProfilePage } from './patient-edit-profile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PatientEditProfilePageRoutingModule
  ],
  declarations: [PatientEditProfilePage]
})
export class PatientEditProfilePageModule {}
