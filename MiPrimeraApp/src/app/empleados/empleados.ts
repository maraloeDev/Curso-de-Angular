import { Component } from '@angular/core';
import { Empleado } from "../empleado/empleado";

@Component({
  selector: 'app-empleados',
  imports: [Empleado],
  templateUrl: './empleados.html',
  styleUrl: './empleados.css',
})
export class Empleados {}
