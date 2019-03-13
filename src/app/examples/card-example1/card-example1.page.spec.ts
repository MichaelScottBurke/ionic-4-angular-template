import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardExample1Page } from './card-example1.page';

describe('CardExample1Page', () => {
  let component: CardExample1Page;
  let fixture: ComponentFixture<CardExample1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardExample1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardExample1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
