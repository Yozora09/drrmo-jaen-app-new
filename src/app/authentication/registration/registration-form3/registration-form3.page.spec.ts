import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistrationForm3Page } from './registration-form3.page';

describe('RegistrationForm3Page', () => {
  let component: RegistrationForm3Page;
  let fixture: ComponentFixture<RegistrationForm3Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RegistrationForm3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
