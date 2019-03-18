import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateRangeExamplePage } from './date-range-example.page';

describe('DateRangeExamplePage', () => {
  let component: DateRangeExamplePage;
  let fixture: ComponentFixture<DateRangeExamplePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateRangeExamplePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateRangeExamplePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
