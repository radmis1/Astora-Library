import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Libroin2Page } from './libroin2.page';

describe('Libroin2Page', () => {
  let component: Libroin2Page;
  let fixture: ComponentFixture<Libroin2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Libroin2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Libroin2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
