import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Empleado } from '../empleados-module';

@Component({
  selector: 'app-empleado-hijo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './empleado-hijo.html',
  styleUrl: './empleado-hijo.css',
})
export class EmpleadoHijo {
  @Input() empleadoDeLista:Empleado;
  @Input() indice:number;

}
