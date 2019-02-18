import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsFabsPage } from './buttons-fabs.page';

describe('ButtonsFabsPage', () => {
  let component: ButtonsFabsPage;
  let fixture: ComponentFixture<ButtonsFabsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonsFabsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonsFabsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
