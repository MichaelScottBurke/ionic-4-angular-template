import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HubLayoutExample3Page } from './hub-layout-example3.page';

describe('HubLayoutExample3Page', () => {
  let component: HubLayoutExample3Page;
  let fixture: ComponentFixture<HubLayoutExample3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HubLayoutExample3Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HubLayoutExample3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
