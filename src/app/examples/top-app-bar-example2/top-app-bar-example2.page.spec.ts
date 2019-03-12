import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopAppBarExample2Page } from './top-app-bar-example2.page';

describe('TopAppBarExample2Page', () => {
  let component: TopAppBarExample2Page;
  let fixture: ComponentFixture<TopAppBarExample2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopAppBarExample2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopAppBarExample2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
