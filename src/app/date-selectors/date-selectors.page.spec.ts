import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateSelectorsPage } from './date-selectors.page';

describe('DateSelectorsPage', () => {
  let component: DateSelectorsPage;
  let fixture: ComponentFixture<DateSelectorsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateSelectorsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateSelectorsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
