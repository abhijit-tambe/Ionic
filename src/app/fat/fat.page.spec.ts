import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FatPage } from './fat.page';

describe('FatPage', () => {
  let component: FatPage;
  let fixture: ComponentFixture<FatPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FatPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
