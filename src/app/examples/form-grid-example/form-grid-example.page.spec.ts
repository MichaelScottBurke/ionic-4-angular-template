import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormGridExamplePage } from './form-grid-example.page';

describe('FormGridExamplePage', () => {
  let component: FormGridExamplePage;
  let fixture: ComponentFixture<FormGridExamplePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormGridExamplePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormGridExamplePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
