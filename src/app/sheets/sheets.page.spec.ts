import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SheetsPage } from './sheets.page';

describe('SheetsPage', () => {
  let component: SheetsPage;
  let fixture: ComponentFixture<SheetsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SheetsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SheetsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
