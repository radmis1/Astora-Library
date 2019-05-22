import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProximamentePage } from './proximamente.page';

describe('ProximamentePage', () => {
  let component: ProximamentePage;
  let fixture: ComponentFixture<ProximamentePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProximamentePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProximamentePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
