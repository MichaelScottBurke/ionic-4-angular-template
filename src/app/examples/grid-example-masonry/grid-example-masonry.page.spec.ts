import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridExampleMasonryPage } from './grid-example-masonry.page';

describe('GridExampleMasonryPage', () => {
  let component: GridExampleMasonryPage;
  let fixture: ComponentFixture<GridExampleMasonryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridExampleMasonryPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridExampleMasonryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
