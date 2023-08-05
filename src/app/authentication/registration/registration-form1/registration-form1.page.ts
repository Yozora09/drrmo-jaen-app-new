import { Component, OnInit } from '@angular/core';

import { MaskitoOptions, MaskitoElementPredicateAsync } from '@maskito/core';

@Component({
  selector: 'app-registration-form1',
  templateUrl: './registration-form1.page.html',
  styleUrls: ['./registration-form1.page.scss'],
})
export class RegistrationForm1Page implements OnInit {

  // Contact Number Formatting
  readonly phoneMask: MaskitoOptions = {
    mask: ['+', '6', '3', ' ', /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/],
  };

  readonly maskPredicate: MaskitoElementPredicateAsync = async (el) => (el as HTMLIonInputElement).getInputElement();

  constructor() { }

  ngOnInit() {
  }

}
