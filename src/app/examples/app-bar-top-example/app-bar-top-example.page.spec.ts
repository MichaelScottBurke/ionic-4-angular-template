import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppBarTopExamplePage } from './app-bar-top-example.page';

describe('AppBarTopExamplePage', () => {
  let component: AppBarTopExamplePage;
  let fixture: ComponentFixture<AppBarTopExamplePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppBarTopExamplePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppBarTopExamplePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
