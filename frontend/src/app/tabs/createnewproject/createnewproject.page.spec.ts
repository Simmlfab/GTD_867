import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatenewprojectPage } from './createnewproject.page';

describe('CreatenewprojectPage', () => {
  let component: CreatenewprojectPage;
  let fixture: ComponentFixture<CreatenewprojectPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatenewprojectPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatenewprojectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
