import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchivedPage } from './archived.page';

describe('ArchivedPage', () => {
  let component: ArchivedPage;
  let fixture: ComponentFixture<ArchivedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchivedPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchivedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
