import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppBarExampleTabavatarPage } from './app-bar-example-tabavatar.page';

describe('AppBarExampleTabavatarPage', () => {
  let component: AppBarExampleTabavatarPage;
  let fixture: ComponentFixture<AppBarExampleTabavatarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppBarExampleTabavatarPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppBarExampleTabavatarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
