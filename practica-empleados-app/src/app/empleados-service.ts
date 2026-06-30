import { Service } from '@angular/core';
import { Empleado } from './empleados-module';

@Service()
export class EmpleadosService {
  //Array de empleados
  empleados: Empleado[] = [
    new Empleado('John', 'Doe', 'Developer', 50000),
    new Empleado('Jane', 'Smith', 'Designer', 60000),
    new Empleado('Mike', 'Johnson', 'Manager', 70000),
    new Empleado('Emily', 'Davis', 'Tester', 55000),
  ];

  agregarEmpleadoServicio(empleado: Empleado) {
    this.empleados.push(empleado);
  }
}
