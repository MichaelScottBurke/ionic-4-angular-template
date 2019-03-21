import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerExamplePage } from './banner-example.page';

describe('BannerExamplePage', () => {
  let component: BannerExamplePage;
  let fixture: ComponentFixture<BannerExamplePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerExamplePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerExamplePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
