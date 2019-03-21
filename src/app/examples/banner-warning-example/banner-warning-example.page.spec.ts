import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerWarningExamplePage } from './banner-warning-example.page';

describe('BannerWarningExamplePage', () => {
  let component: BannerWarningExamplePage;
  let fixture: ComponentFixture<BannerWarningExamplePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerWarningExamplePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerWarningExamplePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
