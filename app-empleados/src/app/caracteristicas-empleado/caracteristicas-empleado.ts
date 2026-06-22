import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-caracteristicas-empleado',
  imports: [],
  templateUrl: './caracteristicas-empleado.html',
  styleUrl: './caracteristicas-empleado.css',
})
export class CaracteristicasEmpleado {
  @Output() CaracteristicasEmpleado = new EventEmitter<string>()

  agregaCaracteristicas(nuevaCaracteristica:string) {
    this.CaracteristicasEmpleado.emit(nuevaCaracteristica);
  }
}
