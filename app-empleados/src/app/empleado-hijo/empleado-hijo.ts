import { Component, Input } from '@angular/core';
import { Empleado } from '../Empleado.model';
import { CaracteristicasEmpleado } from '../caracteristicas-empleado/caracteristicas-empleado';

@Component({
  selector: 'app-empleado-hijo',
  imports: [CaracteristicasEmpleado],
  templateUrl: './empleado-hijo.html',
  styleUrl: './empleado-hijo.css',
})
export class EmpleadoHijo {
  @Input() empleadoDeLista: Empleado;
  @Input() indice: number;

  arrayCaracteristicas = [''];

  agregarCaracteristica(arrayCaracteristicas: string) {
    this.arrayCaracteristicas.push(arrayCaracteristicas);
  }
}
