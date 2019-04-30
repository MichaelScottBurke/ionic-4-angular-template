import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HubLayoutExample2Page } from './hub-layout-example2.page';

describe('HubLayoutExample2Page', () => {
  let component: HubLayoutExample2Page;
  let fixture: ComponentFixture<HubLayoutExample2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HubLayoutExample2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HubLayoutExample2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
