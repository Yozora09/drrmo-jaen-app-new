import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrationForm3PageRoutingModule } from './registration-form3-routing.module';

import { RegistrationForm3Page } from './registration-form3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrationForm3PageRoutingModule
  ],
  declarations: [RegistrationForm3Page]
})
export class RegistrationForm3PageModule {}
