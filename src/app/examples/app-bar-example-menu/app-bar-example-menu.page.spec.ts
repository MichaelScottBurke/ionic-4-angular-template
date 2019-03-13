import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppBarExampleMenuPage } from './app-bar-example-menu.page';

describe('AppBarExampleMenuPage', () => {
  let component: AppBarExampleMenuPage;
  let fixture: ComponentFixture<AppBarExampleMenuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppBarExampleMenuPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppBarExampleMenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
