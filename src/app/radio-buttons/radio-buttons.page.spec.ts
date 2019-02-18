import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioButtonsPage } from './radio-buttons.page';

describe('RadioButtonsPage', () => {
  let component: RadioButtonsPage;
  let fixture: ComponentFixture<RadioButtonsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadioButtonsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioButtonsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
