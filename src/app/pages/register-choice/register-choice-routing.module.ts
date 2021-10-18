import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterChoicePage } from './register-choice.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterChoicePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterChoicePageRoutingModule {}
