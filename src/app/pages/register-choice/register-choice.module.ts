import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterChoicePageRoutingModule } from './register-choice-routing.module';

import { RegisterChoicePage } from './register-choice.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterChoicePageRoutingModule
  ],
  declarations: [RegisterChoicePage]
})
export class RegisterChoicePageModule {}
