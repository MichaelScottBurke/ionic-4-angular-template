import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardExample1Page } from './dashboard-example1.page';

describe('DashboardExample1Page', () => {
  let component: DashboardExample1Page;
  let fixture: ComponentFixture<DashboardExample1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardExample1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardExample1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
