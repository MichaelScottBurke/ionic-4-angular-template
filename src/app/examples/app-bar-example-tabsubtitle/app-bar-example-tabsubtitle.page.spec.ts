import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppBarExampleTabsubtitlePage } from './app-bar-example-tabsubtitle.page';

describe('AppBarExampleTabsubtitlePage', () => {
  let component: AppBarExampleTabsubtitlePage;
  let fixture: ComponentFixture<AppBarExampleTabsubtitlePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppBarExampleTabsubtitlePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppBarExampleTabsubtitlePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
