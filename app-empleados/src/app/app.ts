import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EmpleadoHijo } from './empleado-hijo/empleado-hijo';
import { ServicioEmpleados } from './servicio-empleados';
import { EmmpleadosService } from './empleados-service';
import { Empleado } from './Empleado.model';

@Component({
  selector: 'app-root',
  imports: [FormsModule, EmpleadoHijo],
  templateUrl: './app.html',
  styleUrl: './app.css',
  providers: [ServicioEmpleados, EmmpleadosService],
})
export class App implements OnInit {
  titulo = 'Listado de Empleados';

  constructor(
    private miServicio: ServicioEmpleados,
    private empleadosService: EmmpleadosService,
  ) {}
  ngOnInit(): void {
    this.empleados = this.empleadosService.empleados;
  }
  empleados: Empleado[] = [];

  cuadroNombre = '';
  cuadroApellido = '';
  cuadroCargo = '';
  cuadroSalario = 0;

  agregarEmpleado() {
    let miempleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
    this.miServicio.muestraMensaje('Nombre del empleado' + miempleado.nombre);
    this.empleadosService.agregarEmpleadoServicio(miempleado);
  }
}
