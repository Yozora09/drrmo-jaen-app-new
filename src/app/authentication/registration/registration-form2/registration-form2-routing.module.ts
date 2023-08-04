import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrationForm2Page } from './registration-form2.page';

const routes: Routes = [
  {
    path: '',
    component: RegistrationForm2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrationForm2PageRoutingModule {}
