import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Libropo2Page } from './libropo2.page';

describe('Libropo2Page', () => {
  let component: Libropo2Page;
  let fixture: ComponentFixture<Libropo2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Libropo2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Libropo2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
