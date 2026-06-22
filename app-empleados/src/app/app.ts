import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Empleado } from './Empleado.model';
import { EmpleadoHijo } from "./empleado-hijo/empleado-hijo";

@Component({
  selector: 'app-root',
  imports: [FormsModule, EmpleadoHijo],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  titulo='Listado de Empleados'
  empleados:Empleado[]=[ 

    new Empleado('Juan', 'Diaz', 'Presidente', 54777),
    new Empleado('Mario','Redriguez', 'Dependiente', 15444),
    new Empleado('Rana', 'Gustavo', 'Presidente', 10000),
    new Empleado('Carlos', 'Lopez', 'Presidente', 17000)
   ];
   cuadroNombre="";
   cuadroApellido="";
   cuadroCargo="";
   cuadroSalario=0;

   agregarEmpleado() {
    if (!this.cuadroNombre || !this.cuadroApellido || !this.cuadroCargo || this.cuadroSalario <= 0) {
      alert('Campos incompletos');
      return;
    }

    
    this.empleados.push(
      new Empleado(
        this.cuadroNombre,
        this.cuadroApellido,
        this.cuadroCargo,
        this.cuadroSalario
      )
    );
  }  
}
