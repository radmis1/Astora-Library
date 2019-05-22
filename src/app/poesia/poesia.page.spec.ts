import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoesiaPage } from './poesia.page';

describe('PoesiaPage', () => {
  let component: PoesiaPage;
  let fixture: ComponentFixture<PoesiaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoesiaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoesiaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
