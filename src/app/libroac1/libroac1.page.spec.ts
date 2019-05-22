import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Libroac1Page } from './libroac1.page';

describe('Libroac1Page', () => {
  let component: Libroac1Page;
  let fixture: ComponentFixture<Libroac1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Libroac1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Libroac1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
