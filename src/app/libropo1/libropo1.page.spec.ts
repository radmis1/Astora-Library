import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Libropo1Page } from './libropo1.page';

describe('Libropo1Page', () => {
  let component: Libropo1Page;
  let fixture: ComponentFixture<Libropo1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Libropo1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Libropo1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
