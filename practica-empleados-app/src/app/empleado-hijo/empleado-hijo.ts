import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Empleado } from '../empleados-module';
import { CaracteristicasEmpleado } from "../caracteristicas-empleado/caracteristicas-empleado";

@Component({
  selector: 'app-empleado-hijo',
  standalone: true,
  imports: [CommonModule, CaracteristicasEmpleado],
  templateUrl: './empleado-hijo.html',
  styleUrl: './empleado-hijo.css',
})
export class EmpleadoHijo {
  @Input() empleadoDeLista:Empleado;
  @Input() indice:number;

    //Array de empleados
  empleados: Empleado[] = [
    new Empleado('John', 'Doe', 'Developer', 50000),
    new Empleado('Jane', 'Smith', 'Designer', 60000),
    new Empleado('Mike', 'Johnson', 'Manager', 70000),
    new Empleado('Emily', 'Davis', 'Tester', 55000),
  ];

  arrayCaracteristicas=[''];

  agregarCaracteristica(nuevaCaracteristica:string) {

    this.arrayCaracteristicas.push(nuevaCaracteristica);
  }

}
