import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardExample3Page } from './card-example3.page';

describe('CardExample3Page', () => {
  let component: CardExample3Page;
  let fixture: ComponentFixture<CardExample3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardExample3Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardExample3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
