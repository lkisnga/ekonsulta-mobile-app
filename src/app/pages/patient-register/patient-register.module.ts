import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PatientRegisterPageRoutingModule } from './patient-register-routing.module';

import { PatientRegisterPage } from './patient-register.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PatientRegisterPageRoutingModule
  ],
  declarations: [PatientRegisterPage]
})
export class PatientRegisterPageModule {}
