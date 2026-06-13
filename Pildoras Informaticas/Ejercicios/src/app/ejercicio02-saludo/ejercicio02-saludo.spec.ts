import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejercicio02Saludo } from './ejercicio02-saludo';

describe('Ejercicio02Saludo', () => {
  let component: Ejercicio02Saludo;
  let fixture: ComponentFixture<Ejercicio02Saludo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ejercicio02Saludo],
    }).compileComponents();

    fixture = TestBed.createComponent(Ejercicio02Saludo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
