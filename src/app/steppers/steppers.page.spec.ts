import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SteppersPage } from './steppers.page';

describe('SteppersPage', () => {
  let component: SteppersPage;
  let fixture: ComponentFixture<SteppersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SteppersPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SteppersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
