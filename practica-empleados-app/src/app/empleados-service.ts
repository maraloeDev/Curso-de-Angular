import { Injectable } from '@angular/core';
import { Empleado } from './empleados-module';
import { ServicioEmpleados } from './servicio-empleados';

@Injectable({ providedIn: 'root' })
export class EmpleadosService {
  constructor(private servicioVentanaEmergente: ServicioEmpleados) {}
  //Array de empleados
  empleados: Empleado[] = [
    new Empleado('John', 'Doe', 'Developer', 50000),
    new Empleado('Jane', 'Smith', 'Designer', 60000),
    new Empleado('Mike', 'Johnson', 'Manager', 70000),
    new Empleado('Emily', 'Davis', 'Tester', 55000),
  ];

  agregarEmpleadoServicio(empleado: Empleado) {
    this.servicioVentanaEmergente.muestraMensaje(
      'Persona que se va a agregar \n' + empleado.nombre + '\n Salario: ' + empleado.salario,
    );
    this.empleados.push(empleado);
  }
}
