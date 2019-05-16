import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaloriePage } from './calorie.page';

describe('CaloriePage', () => {
  let component: CaloriePage;
  let fixture: ComponentFixture<CaloriePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaloriePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaloriePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
