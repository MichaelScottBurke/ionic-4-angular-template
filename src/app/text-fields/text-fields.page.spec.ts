import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextFieldsPage } from './text-fields.page';

describe('TextFieldsPage', () => {
  let component: TextFieldsPage;
  let fixture: ComponentFixture<TextFieldsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextFieldsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextFieldsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
