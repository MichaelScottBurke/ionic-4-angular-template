import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectInputsPage } from './select-inputs.page';

describe('SelectInputsPage', () => {
  let component: SelectInputsPage;
  let fixture: ComponentFixture<SelectInputsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectInputsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectInputsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
