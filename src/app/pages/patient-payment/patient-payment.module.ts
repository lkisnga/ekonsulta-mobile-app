import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PatientPaymentPageRoutingModule } from './patient-payment-routing.module';

import { PatientPaymentPage } from './patient-payment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PatientPaymentPageRoutingModule
  ],
  declarations: [PatientPaymentPage]
})
export class PatientPaymentPageModule {}
