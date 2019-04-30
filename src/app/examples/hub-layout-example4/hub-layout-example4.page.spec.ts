import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HubLayoutExample4Page } from './hub-layout-example4.page';

describe('HubLayoutExample4Page', () => {
  let component: HubLayoutExample4Page;
  let fixture: ComponentFixture<HubLayoutExample4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HubLayoutExample4Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HubLayoutExample4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
