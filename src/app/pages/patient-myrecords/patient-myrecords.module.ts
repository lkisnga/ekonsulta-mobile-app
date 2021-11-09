import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PatientMyrecordsPageRoutingModule } from './patient-myrecords-routing.module';

import { PatientMyrecordsPage } from './patient-myrecords.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PatientMyrecordsPageRoutingModule
  ],
  declarations: [PatientMyrecordsPage]
})
export class PatientMyrecordsPageModule {}
