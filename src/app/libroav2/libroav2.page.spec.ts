import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Libroav2Page } from './libroav2.page';

describe('Libroav2Page', () => {
  let component: Libroav2Page;
  let fixture: ComponentFixture<Libroav2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Libroav2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Libroav2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
