import { Component } from '@angular/core';

@Component({
  selector: 'app-empleado',
  imports: [],
  templateUrl: './empleado.html',
  styleUrl: './empleado.css',
  // inline, es que si el estilo es muy pequeño, se puede poner directamente en el componente, pero si es muy grande, es mejor ponerlo en un archivo css separado
  //styles:["p{background-color: red;}"]
})
export class Empleado {
  nombre="Eduardo";
  apellido="Martín-Sonseca";
  edad=26;
  //empresa="Empresa X";
  habilitarCuadro = true
  userRegister=false
  textoDeRegistro="No hay nadie registrado";

  
  public getEdad(){
    return this.edad;
  }


  getRegistroUser(){
    this.userRegister=false
  }

  //Evento en el que se muestra un mensaje cuando el usuario se registra,
  //y otro mensaje cuando el usuario no se registra, dependiendo del valor del input
  setUsuarioRegistrado(event:Event){
    this.textoDeRegistro="El usuario se acaba de registrar"

    if((<HTMLInputElement>event.target).value === "Si"){
      this.textoDeRegistro="El usuario se acaba de registrar"
  } else {
    this.textoDeRegistro="El usuario no se ha registrado"
}
  }
}
