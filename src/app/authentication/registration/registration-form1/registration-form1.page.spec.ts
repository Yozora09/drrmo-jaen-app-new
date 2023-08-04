import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistrationForm1Page } from './registration-form1.page';

describe('RegistrationForm1Page', () => {
  let component: RegistrationForm1Page;
  let fixture: ComponentFixture<RegistrationForm1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RegistrationForm1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
