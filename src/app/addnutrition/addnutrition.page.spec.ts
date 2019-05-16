import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnutritionPage } from './addnutrition.page';

describe('AddnutritionPage', () => {
  let component: AddnutritionPage;
  let fixture: ComponentFixture<AddnutritionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddnutritionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddnutritionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
