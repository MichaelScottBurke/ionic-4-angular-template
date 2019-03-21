import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeDashboardExample2Page } from './home-dashboard-example2.page';

describe('HomeDashboardExample2Page', () => {
  let component: HomeDashboardExample2Page;
  let fixture: ComponentFixture<HomeDashboardExample2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeDashboardExample2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeDashboardExample2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
