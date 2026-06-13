import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejercicio01Contador } from './ejercicio01-contador';

describe('Ejercicio01Contador', () => {
  let component: Ejercicio01Contador;
  let fixture: ComponentFixture<Ejercicio01Contador>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ejercicio01Contador],
    }).compileComponents();

    fixture = TestBed.createComponent(Ejercicio01Contador);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
