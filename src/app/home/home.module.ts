import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { HomePageRoutingModule } from './home-routing.module';
import { Page1Component } from '../components/onboard-pages/page1/page1.component';
import { Page2Component } from '../components/onboard-pages/page2/page2.component';
import { Page3Component } from '../components/onboard-pages/page3/page3.component';
import { StartBtnComponent } from '../components/start-btn/start-btn.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, Page1Component, Page2Component, Page3Component, StartBtnComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomePageModule {}
