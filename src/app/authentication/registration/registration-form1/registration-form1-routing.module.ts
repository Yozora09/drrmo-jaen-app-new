import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrationForm1Page } from './registration-form1.page';

const routes: Routes = [
  {
    path: '',
    component: RegistrationForm1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrationForm1PageRoutingModule {}
