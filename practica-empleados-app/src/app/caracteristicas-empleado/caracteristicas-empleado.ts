import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ServicioEmpleados } from '../servicio-empleados';

@Component({
  selector: 'app-caracteristicas-empleado',
  imports: [],
  templateUrl: './caracteristicas-empleado.html',
  styleUrl: './caracteristicas-empleado.css',
  providers: [ServicioEmpleados]
})
export class CaracteristicasEmpleado {
  @Output() caracteristicaEmpleado = new EventEmitter<string>();
  @Input() index:number;

  constructor(private servicioCaracteristicas:ServicioEmpleados){ }

  agregarCaracteristica(value: string) {
    this.servicioCaracteristicas.muestraMensaje(value);
    this.caracteristicaEmpleado.emit(value);
  }

  eliminarEmpleado(index: number) {
    this.servicioCaracteristicas.muestraMensaje('Empleado eliminado');
    this.caracteristicaEmpleado.emit(`Empleado en el índice ${index} eliminado`);
    
  }
}
