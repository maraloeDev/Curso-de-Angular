import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaracteristicasEmpleado } from './caracteristicas-empleado';

describe('CaracteristicasEmpleado', () => {
  let component: CaracteristicasEmpleado;
  let fixture: ComponentFixture<CaracteristicasEmpleado>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaracteristicasEmpleado]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaracteristicasEmpleado);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
