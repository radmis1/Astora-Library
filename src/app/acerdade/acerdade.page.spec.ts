import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcerdadePage } from './acerdade.page';

describe('AcerdadePage', () => {
  let component: AcerdadePage;
  let fixture: ComponentFixture<AcerdadePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcerdadePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcerdadePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
