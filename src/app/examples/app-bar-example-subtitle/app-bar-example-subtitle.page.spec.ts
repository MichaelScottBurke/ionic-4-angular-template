import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppBarExampleSubtitlePage } from './app-bar-example-subtitle.page';

describe('AppBarExampleSubtitlePage', () => {
  let component: AppBarExampleSubtitlePage;
  let fixture: ComponentFixture<AppBarExampleSubtitlePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppBarExampleSubtitlePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppBarExampleSubtitlePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
