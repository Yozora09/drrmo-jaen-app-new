import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrationForm3Page } from './registration-form3.page';

const routes: Routes = [
  {
    path: '',
    component: RegistrationForm3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrationForm3PageRoutingModule {}
