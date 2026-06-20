import { Component } from '@angular/core';

@Component({
  selector: 'app-empleado',
  imports: [],
  templateUrl: './empleado.html',
  styleUrl: './empleado.css',
})
export class Empleado {

  nombre="Eduardo";
  apellido="Martín-Sonseca";
  edad=26;
  //empresa="Empresa";
  habilitacionCuadro = true;
  botonRegistro=false;

  
  public getEdad() {
    return this.edad;
  }

  /**
   * funcion en el que activo el boton del registro
   */
  public getRegistroUsuario(){
    this.botonRegistro=true
  }
}
