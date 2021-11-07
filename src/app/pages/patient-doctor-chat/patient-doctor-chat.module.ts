import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PatientDoctorChatPageRoutingModule } from './patient-doctor-chat-routing.module';

import { PatientDoctorChatPage } from './patient-doctor-chat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PatientDoctorChatPageRoutingModule
  ],
  declarations: [PatientDoctorChatPage]
})
export class PatientDoctorChatPageModule {}
