import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejercicio03ListaDeTareas } from './ejercicio03-lista-de-tareas';

describe('Ejercicio03ListaDeTareas', () => {
  let component: Ejercicio03ListaDeTareas;
  let fixture: ComponentFixture<Ejercicio03ListaDeTareas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ejercicio03ListaDeTareas],
    }).compileComponents();

    fixture = TestBed.createComponent(Ejercicio03ListaDeTareas);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
