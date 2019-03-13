import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppBarExampleAvatarstartPage } from './app-bar-example-avatarstart.page';

describe('AppBarExampleAvatarstartPage', () => {
  let component: AppBarExampleAvatarstartPage;
  let fixture: ComponentFixture<AppBarExampleAvatarstartPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppBarExampleAvatarstartPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppBarExampleAvatarstartPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
