import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Librodr2Page } from './librodr2.page';

describe('Librodr2Page', () => {
  let component: Librodr2Page;
  let fixture: ComponentFixture<Librodr2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Librodr2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Librodr2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
