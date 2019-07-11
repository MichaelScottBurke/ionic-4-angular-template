import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormInputWidthPage } from './form-input-width.page';

describe('FormInputWidthPage', () => {
  let component: FormInputWidthPage;
  let fixture: ComponentFixture<FormInputWidthPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormInputWidthPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormInputWidthPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
