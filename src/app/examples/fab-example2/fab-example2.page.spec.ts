import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FabExample2Page } from './fab-example2.page';

describe('FabExample2Page', () => {
  let component: FabExample2Page;
  let fixture: ComponentFixture<FabExample2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FabExample2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FabExample2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
