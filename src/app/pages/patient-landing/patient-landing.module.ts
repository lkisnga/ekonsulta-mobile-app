import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PatientLandingPageRoutingModule } from './patient-landing-routing.module';

import { PatientLandingPage } from './patient-landing.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PatientLandingPageRoutingModule
  ],
  declarations: [PatientLandingPage]
})
export class PatientLandingPageModule {}
