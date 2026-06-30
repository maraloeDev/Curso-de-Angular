import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Empleado } from './empleados-module';
import { EmpleadoHijo } from './empleado-hijo/empleado-hijo';
import { ServicioEmpleados } from './servicio-empleados';
import { EmpleadosService } from './empleados-service';

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule, EmpleadoHijo],
  templateUrl: './app.html',
  styleUrl: './app.css',
  providers: [ServicioEmpleados, EmpleadosService],
})
export class App implements OnInit {
  titulo = 'Listado de empleados';

  constructor(
    private miServicio: ServicioEmpleados,
    private empleadosService: EmpleadosService,
  ) {}

  ngOnInit(): void {
    //En el array de empleados, almacenamos la información que viene del servicio
    this.empleados = this.empleadosService.empleados;
  }

  //Array de empleados
  empleados: Empleado[] = [
    new Empleado('John', 'Doe', 'Developer', 50000),
    new Empleado('Jane', 'Smith', 'Designer', 60000),
    new Empleado('Mike', 'Johnson', 'Manager', 70000),
    new Empleado('Emily', 'Davis', 'Tester', 55000),
  ];

  cuadroNombre = '';
  cuadroApellido = '';
  cuadroCargo = '';
  cuadroSalario = 0;

  agregarEmpleado() {
    let miEmpleado = new Empleado(
      this.cuadroNombre,
      this.cuadroApellido,
      this.cuadroCargo,
      this.cuadroSalario,
    );
    this.miServicio.muestraMensaje(
      'Nombre del empleado ' + miEmpleado.nombre + '\nApellido ' + miEmpleado.apellido,
    );
    this.empleadosService.agregarEmpleadoServicio(miEmpleado);
  }
}
