import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistrationForm2Page } from './registration-form2.page';

describe('RegistrationForm2Page', () => {
  let component: RegistrationForm2Page;
  let fixture: ComponentFixture<RegistrationForm2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RegistrationForm2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
