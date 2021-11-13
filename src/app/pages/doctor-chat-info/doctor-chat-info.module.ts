import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DoctorChatInfoPageRoutingModule } from './doctor-chat-info-routing.module';

import { DoctorChatInfoPage } from './doctor-chat-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DoctorChatInfoPageRoutingModule
  ],
  declarations: [DoctorChatInfoPage]
})
export class DoctorChatInfoPageModule {}
