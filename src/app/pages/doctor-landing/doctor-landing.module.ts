import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DoctorLandingPageRoutingModule } from './doctor-landing-routing.module';

import { DoctorLandingPage } from './doctor-landing.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DoctorLandingPageRoutingModule
  ],
  declarations: [DoctorLandingPage]
})
export class DoctorLandingPageModule {}
