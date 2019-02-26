import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormExamplePage } from './form-example.page';

describe('FormExamplePage', () => {
  let component: FormExamplePage;
  let fixture: ComponentFixture<FormExamplePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormExamplePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormExamplePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
