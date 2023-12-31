import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration-form3',
  templateUrl: './registration-form3.page.html',
  styleUrls: ['./registration-form3.page.scss'],
})
export class RegistrationForm3Page implements OnInit {

  password: string = 'password';
  passwordShown: boolean = false;

  constructor() { }

  // show password function
  showPass() {
    if(this.passwordShown) {
      this.passwordShown = false;
      this.password = 'password';
    }
    else {
      this.passwordShown = true;
      this.password = 'text';
    }
  }

  ngOnInit() {
  }

}
