import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FabExamplePage } from './fab-example.page';

describe('FabExamplePage', () => {
  let component: FabExamplePage;
  let fixture: ComponentFixture<FabExamplePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FabExamplePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FabExamplePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
