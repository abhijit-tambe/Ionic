import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DietPage } from './diet.page';

describe('DietPage', () => {
  let component: DietPage;
  let fixture: ComponentFixture<DietPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DietPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DietPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
