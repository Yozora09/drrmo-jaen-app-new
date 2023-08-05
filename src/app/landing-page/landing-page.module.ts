import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LandingPagePageRoutingModule } from './landing-page-routing.module';

import { LandingPagePage } from './landing-page.page';
import { RegisterBtnComponent } from '../components/register-btn/register-btn.component';
import { LoginBtnComponent } from '../components/login-btn/login-btn.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LandingPagePageRoutingModule
  ],
  declarations: [LandingPagePage, RegisterBtnComponent, LoginBtnComponent]
})
export class LandingPagePageModule {}
