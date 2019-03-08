import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HubLayoutExamplePage } from './hub-layout-example.page';

describe('HubLayoutExamplePage', () => {
  let component: HubLayoutExamplePage;
  let fixture: ComponentFixture<HubLayoutExamplePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HubLayoutExamplePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HubLayoutExamplePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
