import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjemploTirar } from './ejemplo-tirar';

describe('EjemploTirar', () => {
  let component: EjemploTirar;
  let fixture: ComponentFixture<EjemploTirar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EjemploTirar],
    }).compileComponents();

    fixture = TestBed.createComponent(EjemploTirar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
