import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Empleados } from './empleadoModel';
import { Empleado } from "./empleado/empleado";

@Component({
  selector: 'app-root',
  imports: [FormsModule, Empleado],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  titulo = 'Lista de empleados';
  nombre = '';
  apellidos = '';
  cargo = '';
  salario = 0;

  //Array
  empleados: Empleados[] = [
    new Empleados('Jose', 'Lopez', 'Presidente', 1500),
    new Empleados('Carlos', 'Lopez', 'Director', 1500),
    new Empleados('Maria', 'Lopez', 'Presidente', 1500),
    new Empleados('Juan', 'Lopez', 'Presidente', 1500),
  ];

  agregarEmpleado() {
    let miEmmpleado = new Empleados(this.nombre, this.apellidos, this.cargo, this.salario);

    if (this.nombre == null || this.apellidos == null || this.cargo == null || this.salario <= 0) {
      alert('Hay algun valor no completo');
    } else {
      this.empleados.push(miEmmpleado);
    }
  }
}
