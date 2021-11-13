import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DoctorPatientChatPageRoutingModule } from './doctor-patient-chat-routing.module';

import { DoctorPatientChatPage } from './doctor-patient-chat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DoctorPatientChatPageRoutingModule
  ],
  declarations: [DoctorPatientChatPage]
})
export class DoctorPatientChatPageModule {}
