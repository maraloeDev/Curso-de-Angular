import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejercicio04MostrarOcultarElementos } from './ejercicio04-mostrar-ocultar-elementos';

describe('Ejercicio04MostrarOcultarElementos', () => {
  let component: Ejercicio04MostrarOcultarElementos;
  let fixture: ComponentFixture<Ejercicio04MostrarOcultarElementos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ejercicio04MostrarOcultarElementos],
    }).compileComponents();

    fixture = TestBed.createComponent(Ejercicio04MostrarOcultarElementos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
