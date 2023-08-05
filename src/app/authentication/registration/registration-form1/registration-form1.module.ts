import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrationForm1PageRoutingModule } from './registration-form1-routing.module';

import { RegistrationForm1Page } from './registration-form1.page';
import { MaskitoModule } from '@maskito/angular';
import { ButtonComponent } from 'src/app/components/button/button.component';
import { Form1Component } from 'src/app/components/form-headers/form1/form1.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaskitoModule,
    RegistrationForm1PageRoutingModule
  ],
  declarations: [RegistrationForm1Page, ButtonComponent, Form1Component]
})
export class RegistrationForm1PageModule {}
