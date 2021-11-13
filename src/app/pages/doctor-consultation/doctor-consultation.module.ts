import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DoctorConsultationPageRoutingModule } from './doctor-consultation-routing.module';

import { DoctorConsultationPage } from './doctor-consultation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DoctorConsultationPageRoutingModule
  ],
  declarations: [DoctorConsultationPage]
})
export class DoctorConsultationPageModule {}
