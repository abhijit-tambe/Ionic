import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdddayworkPage } from './adddaywork.page';

describe('AdddayworkPage', () => {
  let component: AdddayworkPage;
  let fixture: ComponentFixture<AdddayworkPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdddayworkPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdddayworkPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
