import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NajaPage } from './naja.page';

describe('NajaPage', () => {
  let component: NajaPage;
  let fixture: ComponentFixture<NajaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NajaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NajaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
