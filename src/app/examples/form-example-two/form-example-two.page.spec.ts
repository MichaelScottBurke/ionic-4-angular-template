import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormExampleTwoPage } from './form-example-two.page';

describe('FormExampleTwoPage', () => {
  let component: FormExampleTwoPage;
  let fixture: ComponentFixture<FormExampleTwoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormExampleTwoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormExampleTwoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
