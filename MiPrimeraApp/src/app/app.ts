import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Empleados } from "./empleados/empleados";
import { Empleado } from "./empleado/empleado";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Empleados, Empleado],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = 'MiPrimeraApp';
  saludo="Hola alumnos de Angular"
}
