import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PatientChatInfoPageRoutingModule } from './patient-chat-info-routing.module';

import { PatientChatInfoPage } from './patient-chat-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PatientChatInfoPageRoutingModule
  ],
  declarations: [PatientChatInfoPage]
})
export class PatientChatInfoPageModule {}
