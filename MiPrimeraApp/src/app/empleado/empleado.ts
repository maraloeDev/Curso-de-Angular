import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-empleado',
  imports: [FormsModule],
  templateUrl: './empleado.html',
  styleUrl: './empleado.css',
})
export class Empleado {

  nombre="Eduardo"; 
  apellido="Martín-Sonseca";
  edad=26;
  empresa="";
  habilitacionCuadro = true;
  botonRegistro=false;
  textoRegistro ="No hay nadie registrado";
  
  public getEdad() {
    return this.edad;
  }

  /**
   * Actualiza el mensaje según la opción seleccionada en el formulario.
   */
  public setUsuarioRegistrado(event: Event){

    if ((<HTMLInputElement>event.target).value=="si") {
      this.textoRegistro="El usuario se acaba de registrar"
    } else{
      this.textoRegistro="No hay nadie registrado";
    }
}
  /**
   * funcion en el que activo el boton del registro
   */
  public getRegistroUsuario(){
    this.botonRegistro=false
  }
}
