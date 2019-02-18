import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatePickersPage } from './date-pickers.page';

describe('DatePickersPage', () => {
  let component: DatePickersPage;
  let fixture: ComponentFixture<DatePickersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatePickersPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatePickersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
