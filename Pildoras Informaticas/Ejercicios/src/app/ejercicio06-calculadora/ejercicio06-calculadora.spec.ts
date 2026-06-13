import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejercicio06Calculadora } from './ejercicio06-calculadora';

describe('Ejercicio06Calculadora', () => {
  let component: Ejercicio06Calculadora;
  let fixture: ComponentFixture<Ejercicio06Calculadora>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ejercicio06Calculadora],
    }).compileComponents();

    fixture = TestBed.createComponent(Ejercicio06Calculadora);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
