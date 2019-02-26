import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardOverPage } from './card-over.page';

describe('CardOverPage', () => {
  let component: CardOverPage;
  let fixture: ComponentFixture<CardOverPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardOverPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardOverPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
