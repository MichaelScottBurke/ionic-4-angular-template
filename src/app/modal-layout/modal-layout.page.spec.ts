import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalLayoutPage } from './modal-layout.page';

describe('ModalLayoutPage', () => {
  let component: ModalLayoutPage;
  let fixture: ComponentFixture<ModalLayoutPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalLayoutPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalLayoutPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
