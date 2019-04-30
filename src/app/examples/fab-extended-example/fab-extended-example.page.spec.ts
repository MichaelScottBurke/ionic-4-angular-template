import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FabExtendedExamplePage } from './fab-extended-example.page';

describe('FabExtendedExamplePage', () => {
  let component: FabExtendedExamplePage;
  let fixture: ComponentFixture<FabExtendedExamplePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FabExtendedExamplePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FabExtendedExamplePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
