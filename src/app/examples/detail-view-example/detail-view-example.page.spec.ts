import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailViewExamplePage } from './detail-view-example.page';

describe('DetailViewExamplePage', () => {
  let component: DetailViewExamplePage;
  let fixture: ComponentFixture<DetailViewExamplePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailViewExamplePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailViewExamplePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
