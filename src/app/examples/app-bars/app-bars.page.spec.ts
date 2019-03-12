import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppBarsPage } from './app-bars.page';

describe('AppBarsPage', () => {
  let component: AppBarsPage;
  let fixture: ComponentFixture<AppBarsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppBarsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppBarsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
