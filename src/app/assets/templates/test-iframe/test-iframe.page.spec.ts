import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestIframePage } from './test-iframe.page';

describe('TestIframePage', () => {
  let component: TestIframePage;
  let fixture: ComponentFixture<TestIframePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestIframePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestIframePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
