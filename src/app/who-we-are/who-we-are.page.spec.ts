import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhoWeArePage } from './who-we-are.page';

describe('WhoWeArePage', () => {
  let component: WhoWeArePage;
  let fixture: ComponentFixture<WhoWeArePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhoWeArePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhoWeArePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
