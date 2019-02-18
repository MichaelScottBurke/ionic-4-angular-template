import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconographyPage } from './iconography.page';

describe('IconographyPage', () => {
  let component: IconographyPage;
  let fixture: ComponentFixture<IconographyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconographyPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconographyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
