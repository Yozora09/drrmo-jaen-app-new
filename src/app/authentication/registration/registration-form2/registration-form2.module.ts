import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrationForm2PageRoutingModule } from './registration-form2-routing.module';

import { RegistrationForm2Page } from './registration-form2.page';
import { Form2Component } from 'src/app/components/form-headers/form2/form2.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrationForm2PageRoutingModule
  ],
  declarations: [RegistrationForm2Page, Form2Component]
})
export class RegistrationForm2PageModule {}
