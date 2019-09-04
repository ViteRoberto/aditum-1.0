import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeventoPage } from './devento.page';

describe('DeventoPage', () => {
  let component: DeventoPage;
  let fixture: ComponentFixture<DeventoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeventoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeventoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
