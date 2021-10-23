import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PatientConsultationPageRoutingModule } from './patient-consultation-routing.module';

import { PatientConsultationPage } from './patient-consultation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PatientConsultationPageRoutingModule
  ],
  declarations: [PatientConsultationPage]
})
export class PatientConsultationPageModule {}
