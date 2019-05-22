import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Librodr1Page } from './librodr1.page';

describe('Librodr1Page', () => {
  let component: Librodr1Page;
  let fixture: ComponentFixture<Librodr1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Librodr1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Librodr1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
