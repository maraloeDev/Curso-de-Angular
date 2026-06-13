import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejercicio05ListaDeColores } from './ejercicio05-lista-de-colores';

describe('Ejercicio05ListaDeColores', () => {
  let component: Ejercicio05ListaDeColores;
  let fixture: ComponentFixture<Ejercicio05ListaDeColores>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ejercicio05ListaDeColores],
    }).compileComponents();

    fixture = TestBed.createComponent(Ejercicio05ListaDeColores);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
