import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  titulo = 'Registro de usuarios';
  mensaje = '';
  registrado = false;
  nombre='';
  apellido='';
  entradas= [
      {titule:"Python es lo mejor"},
      {titule:"La IA no vale para nada"},
      {titule:"La burjura explitara"},
      {titule:"Viva la documentacion"},
      {titule:"Holiiiii!!!!"},
    ];
  
  registrarUsuario() {
    this.registrado = true;
    this.mensaje = 'Usuario registrado correctamente';
  }
}
