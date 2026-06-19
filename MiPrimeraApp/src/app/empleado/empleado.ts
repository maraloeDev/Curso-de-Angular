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

  
  public getEdad() {
    return this.edad;
  }
}
