import { Service } from '@angular/core';
import { Empleado } from './Empleado.model';
import { ServicioEmpleados } from './servicio-empleados';

@Service()
export class EmmpleadosService {


  empleados: Empleado[] = [
    new Empleado('Juan', 'Diaz', 'Presidente', 54777),
    new Empleado('Mario', 'Redriguez', 'Dependiente', 15444),
    new Empleado('Rana', 'Gustavo', 'Presidente', 10000),
    new Empleado('Carlos', 'Lopez', 'Presidente', 17000),
  ];

  agregarEmpleadoServicio(empleado: Empleado) {

    this.empleados.push(empleado);
  }
}
