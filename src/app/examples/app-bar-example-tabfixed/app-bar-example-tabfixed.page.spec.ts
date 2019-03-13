import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppBarExampleTabfixedPage } from './app-bar-example-tabfixed.page';

describe('AppBarExampleTabfixedPage', () => {
  let component: AppBarExampleTabfixedPage;
  let fixture: ComponentFixture<AppBarExampleTabfixedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppBarExampleTabfixedPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppBarExampleTabfixedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
