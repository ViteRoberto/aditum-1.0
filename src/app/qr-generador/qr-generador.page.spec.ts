import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QrGeneradorPage } from './qr-generador.page';

describe('QrGeneradorPage', () => {
  let component: QrGeneradorPage;
  let fixture: ComponentFixture<QrGeneradorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QrGeneradorPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QrGeneradorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
