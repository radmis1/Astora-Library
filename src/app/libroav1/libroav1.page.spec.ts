import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Libroav1Page } from './libroav1.page';

describe('Libroav1Page', () => {
  let component: Libroav1Page;
  let fixture: ComponentFixture<Libroav1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Libroav1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Libroav1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
