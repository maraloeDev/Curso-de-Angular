import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Empleado } from './empleados-module';
import { EmpleadoHijo } from './empleado-hijo/empleado-hijo';

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule, EmpleadoHijo],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  titulo = 'Listado de empleados';

    //Array de empleados
  empleados: Empleado[] = [
    new Empleado('John', 'Doe', 'Developer', 50000),
    new Empleado('Jane', 'Smith', 'Designer', 60000),
    new Empleado('Mike', 'Johnson', 'Manager', 70000),
    new Empleado('Emily', 'Davis', 'Tester', 55000),
  ];


  cuadroNombre="";
  cuadroApellido="";
  cuadroCargo="";
  cuadroSalario=0;

  agregarEmpleado() { 
    this.empleados.push(new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario));
   }
}
