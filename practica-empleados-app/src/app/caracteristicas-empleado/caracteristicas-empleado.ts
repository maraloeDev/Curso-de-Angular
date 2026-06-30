import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ServicioEmpleados } from '../servicio-empleados';

@Component({
  selector: 'app-caracteristicas-empleado',
  imports: [],
  templateUrl: './caracteristicas-empleado.html',
  styleUrl: './caracteristicas-empleado.css',
})
export class CaracteristicasEmpleado {
  @Output() caracteristicaEmpleado = new EventEmitter<string>();

  constructor(private servicioCaracteristicas:ServicioEmpleados){ }

  agregarCaracteristica(value: string) {
    this.servicioCaracteristicas.muestraMensaje(value);
    this.caracteristicaEmpleado.emit(value);
  }
}
