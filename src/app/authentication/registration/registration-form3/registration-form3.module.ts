import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrationForm3PageRoutingModule } from './registration-form3-routing.module';

import { RegistrationForm3Page } from './registration-form3.page';
import { Form3Component } from 'src/app/components/form-headers/form3/form3.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrationForm3PageRoutingModule
  ],
  declarations: [RegistrationForm3Page, Form3Component]
})
export class RegistrationForm3PageModule {}
