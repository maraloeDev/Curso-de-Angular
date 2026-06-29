import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-caracteristicas-empleado',
  imports: [],
  templateUrl: './caracteristicas-empleado.html',
  styleUrl: './caracteristicas-empleado.css',
})
export class CaracteristicasEmpleado {
  @Output() caracteristicaEmpleado = new EventEmitter<string>();

  agregarCaracteristica(value: string) {
    this.caracteristicaEmpleado.emit(value);
  }
}
