import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PatientTransactionhistoryPageRoutingModule } from './patient-transactionhistory-routing.module';

import { PatientTransactionhistoryPage } from './patient-transactionhistory.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PatientTransactionhistoryPageRoutingModule
  ],
  declarations: [PatientTransactionhistoryPage]
})
export class PatientTransactionhistoryPageModule {}
