import { Component, EventEmitter, Output } from '@angular/core';
import { ServicioEmpleados } from '../servicio-empleados';

@Component({
  selector: 'app-caracteristicas-empleado',
  imports: [],
  templateUrl: './caracteristicas-empleado.html',
  styleUrl: './caracteristicas-empleado.css',
})
export class CaracteristicasEmpleado {
  // El output sirve para emitir eventos desde el componente hijo al componente padre
  @Output() CaracteristicasEmpleado = new EventEmitter<string>()

  constructor(private miServicio:ServicioEmpleados) {

  }

  agregaCaracteristicas(nuevaCaracteristica:string) {
    this.miServicio.muestraMensaje(nuevaCaracteristica)
    this.CaracteristicasEmpleado.emit(nuevaCaracteristica);
  }
}
