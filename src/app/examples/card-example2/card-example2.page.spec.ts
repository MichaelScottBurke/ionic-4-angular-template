import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardExample2Page } from './card-example2.page';

describe('CardExample2Page', () => {
  let component: CardExample2Page;
  let fixture: ComponentFixture<CardExample2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardExample2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardExample2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
