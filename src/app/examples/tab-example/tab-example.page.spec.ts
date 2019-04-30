import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabExamplePage } from './tab-example.page';

describe('TabExamplePage', () => {
  let component: TabExamplePage;
  let fixture: ComponentFixture<TabExamplePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabExamplePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabExamplePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
