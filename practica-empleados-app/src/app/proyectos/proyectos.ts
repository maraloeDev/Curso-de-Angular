import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Empleado } from '../empleados-module';
import { EmpleadosService } from '../empleados-service';

@Component({
  selector: 'app-proyectos',
  imports: [CommonModule, FormsModule],
  templateUrl: './proyectos.html',
  styleUrl: './proyectos.css',
})
export class Proyectos {
  titulo = 'Listado de empleados';
  nombre = '';

  constructor(
    private empleadosService: EmpleadosService,
    private router: Router,
  ) {}

  get empleados(): Empleado[] {
    return this.empleadosService.empleados;
  }

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
    
    this.empleadosService.agregarEmpleadoServicio(miEmpleado);
    this.router.navigate(['']);
  }
  volverHome() {
    this.router.navigate(['']);
  }
}
