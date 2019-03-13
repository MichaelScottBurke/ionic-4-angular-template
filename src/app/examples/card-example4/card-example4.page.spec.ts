import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardExample4Page } from './card-example4.page';

describe('CardExample4Page', () => {
  let component: CardExample4Page;
  let fixture: ComponentFixture<CardExample4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardExample4Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardExample4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
