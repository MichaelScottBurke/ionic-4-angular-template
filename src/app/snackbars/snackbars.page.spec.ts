import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnackbarsPage } from './snackbars.page';

describe('SnackbarsPage', () => {
  let component: SnackbarsPage;
  let fixture: ComponentFixture<SnackbarsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnackbarsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnackbarsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
