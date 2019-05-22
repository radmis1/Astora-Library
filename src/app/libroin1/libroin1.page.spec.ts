import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Libroin1Page } from './libroin1.page';

describe('Libroin1Page', () => {
  let component: Libroin1Page;
  let fixture: ComponentFixture<Libroin1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Libroin1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Libroin1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
