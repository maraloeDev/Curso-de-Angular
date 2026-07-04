import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EmpleadoHijo } from '../empleado-hijo/empleado-hijo';
import { Empleado } from '../empleados-module';
import { EmpleadosService } from '../empleados-service';

@Component({
  selector: 'app-home',
  imports: [CommonModule, FormsModule, EmpleadoHijo],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  titulo = 'Listado de empleados';

  constructor(public empleadosService: EmpleadosService) {}

  get empleados(): Empleado[] {
    return this.empleadosService.empleados;
  }
}
