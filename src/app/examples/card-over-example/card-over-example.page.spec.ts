import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardOverExamplePage } from './card-over-example.page';

describe('CardOverExamplePage', () => {
  let component: CardOverExamplePage;
  let fixture: ComponentFixture<CardOverExamplePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardOverExamplePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardOverExamplePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
