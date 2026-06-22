import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-caracteristicas-empleado',
  imports: [],
  templateUrl: './caracteristicas-empleado.html',
  styleUrl: './caracteristicas-empleado.css',
})
export class CaracteristicasEmpleado {
  // El output sirve para emitir eventos desde el componente hijo al componente padre
  @Output() CaracteristicasEmpleado = new EventEmitter<string>()

  agregaCaracteristicas(nuevaCaracteristica:string) {
    this.CaracteristicasEmpleado.emit(nuevaCaracteristica);
  }
}
