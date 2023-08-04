import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrationForm1PageRoutingModule } from './registration-form1-routing.module';

import { RegistrationForm1Page } from './registration-form1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrationForm1PageRoutingModule
  ],
  declarations: [RegistrationForm1Page]
})
export class RegistrationForm1PageModule {}
